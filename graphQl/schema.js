const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = graphql;
const Item = require("../models/item");
const Farmer = require("../models/Farmer");
const Blacklisted = require("../models/blacklisted");
const Complaint = require("../models/Complaint");
const { ObjectId } = require("mongoose").Types;
const Feedback = require("../models/Feedback");
const Request = require("../models/requests");
const CropToData = new GraphQLObjectType({
  name: "CropData",
  fields: () => ({
    y: {
      type: GraphQLFloat,
    },
    label: {
      type: GraphQLString,
    },
  }),
});

const FarmerType = new GraphQLObjectType({
  name: "Farmer",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    phone: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    district: {
      type: GraphQLString,
    },
    avg_rating: {
      type: GraphQLFloat,
    },
    ratings: {
      type: GraphQLInt,
    },
  }),
});
const RequestType = new GraphQLObjectType({
  name: "Request",
  fields: () => ({
    content: {
      type: GraphQLString,
    },
  }),
});

const RequestsType = new GraphQLObjectType({
  name: "Requests",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    farmer: {
      type: FarmerType,
      async resolve(parent, args) {
        let farmer = await Farmer.findById(parent.farmer);
        let items = await Item.find({ farmer: farmer._id });
        let ids = items.map((item, index) => item._id);
        let feedbacks = await Feedback.find({ item: { $in: ids } });
        let size = feedbacks.length;

        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue.rating;
        let total = feedbacks.reduce(reducer, 0);
        let avg = total === 0 ? 0 : total / size;
        return {
          ...farmer.toObject(),
          avg_rating: avg,
          ratings: size,
        };
      },
    },
    crop: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString,
    },
  }),
});

const ComplaintType = new GraphQLObjectType({
  name: "Complaint",
  fields: () => ({
    farmer: {
      type: FarmerType,
      async resolve(parent, args) {
        let farmer = await Farmer.findById(parent.farmer);
        let items = await Item.find({ farmer: farmer._id });
        let ids = items.map((item, index) => item._id);
        let feedbacks = await Feedback.find({ item: { $in: ids } });
        let size = feedbacks.length;

        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue.rating;
        let total = feedbacks.reduce(reducer, 0);
        let avg = total === 0 ? 0 : total / size;
        return {
          ...farmer.toObject(),
          avg_rating: avg,
          ratings: size,
        };
      },
    },
    count: {
      type: graphql.GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    /*1.*/ complaint: {
      type: new GraphQLObjectType({
        name: "complaint",
        fields: () => ({
          farmer: {
            type: FarmerType,
            async resolve(parent, args) {
              console.log(parent.farmer);
              let farmer = await Farmer.findById(parent.farmer);
              let items = await Item.find({ farmer: farmer._id });
              let ids = items.map((item, index) => item._id);
              let feedbacks = await Feedback.find({ item: { $in: ids } });
              let size = feedbacks.length;
              const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.rating;
              let total = feedbacks.reduce(reducer, 0);
              let avg = total / size;
              return {
                ...farmer.toObject(),
                avg_rating: avg,
                ratings: size,
              };
            },
          },
          production: {
            type: new GraphQLList(CropToData),
            async resolve(parent, args) {
              let agg = [
                { $match: { farmer: ObjectId(`${parent.farmer}`) } },
                {
                  $group: {
                    _id: {
                      crop: "$category",
                    },
                    amount: { $sum: "$quantity" },
                  },
                },
              ];
              let logs = await Item.aggregate(agg);
              const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.amount;
              let total = logs.reduce(reducer, 0);
              let modified = logs.map((log, index) => ({
                y: (parseInt(log.amount, 10) / total) * 100,
                label: log._id.crop,
              }));
              return modified;
            },
          },

          complaints: {
            type: new GraphQLList(GraphQLString),
            async resolve(parent, args) {
              let unmodified;
              if (parent.crop === "all" && parent.category === "all") {
                unmodified = await Complaint.find({
                  farmer: parent.farmer,
                });
                console.log("un",unmodified);
              } else if (parent.crop === "all") {
                unmodified = await Complaint.find({
                  farmer: parent.farmer,
                  category: parent.category,
                });
              } else if (parent.category === "all") {
                unmodified = await Complaint.find({
                  farmer: parent.farmer,
                  crop: parent.crop,
                });
              } else {
                unmodified = await Complaint.find({
                  farmer: parent.farmer,
                  crop: parent.crop,
                  category: parent.category,
                });
              }
              let modified = unmodified.map((log, index) => log.content);
              console.log("mo",modified);
              return modified;
            },
          },
          warnings:{
            type:GraphQLInt,
            async resolve(parent,args){
              let warnings = await Blacklisted.findOne({farmer:parent.farmer,crop:parent.crop,category:parent.category},{warnings:1});
             console.log("warn",warnings);
              if (warnings == null) return 0;
             return warnings.warnings;
            }
          }
        }),
      }),
      args: {
        id: { type: GraphQLID },
        crop: { type: GraphQLString },
        category: { type: GraphQLString },
      },
      async resolve(parent, args) {
        console.log(args);
        return {
          farmer: args.id,
          crop: args.crop,
          category: args.category,
        };
      },
    },

    /*2.*/ getSalesByState: {
      type: new GraphQLObjectType({
        name: "getSalesByState",
        fields: () => ({
          crops: {
            type: new GraphQLList(GraphQLString),
          },
          sales: {
            type: new GraphQLList(GraphQLFloat),
          },
        }),
      }),
      args: { state: { type: GraphQLString } },
      async resolve(parent, args) {
        /*
         *TODO:
         *find the sales in a given state  based on the state argument
         *
         */
         let sales;
        if(args.state == "Rajasthan"){
          sales = {
          crops: ["Rice", "wheat", "Maize","Barley","Linseeds","pulses","Raggi","potatoes"],
          sales: [35.0, 28.4, 12.9,18,26.9,19,29,27],
        };
        }

       else if(args.state == "UP")
        {
           sales = {
          crops: ["Rice", "wheat", "Maize","Barley","Linseeds","pulses","Raggi","potatoes"],
          sales: [19, 21, 12.9,18,21.9,17,21,19],
        }
        
      }
      else if(args.state == "Uttrakhand")
      {
         sales = {
          crops: ["Rice", "wheat", "Maize","Barley","Linseeds","pulses","Raggi","potatoes"],
          sales: [23, 29, 18,21,21.9,17,21,19],
        }
      }else{

         sales = {
          crops: ["Rice", "wheat", "Maize","Barley","Linseeds","pulses","Raggi","potatoes"],
          sales: [21,32,26,19,21.9,20,22,19],
        }
      }
     return sales;
    }
  },

    requests: {
      type: new GraphQLList(RequestsType),
      args: {},
      async resolve(parent, args) {
        let requests = await Request.find(
          {},
          { farmer: 1, crop: 1, category: 1, _id: 1 }
        );
        return requests;
      },
    },
    request: {
      type: RequestType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        let request = await Request.findById(args.id);
        console.log(request);
        return {
          content:request.content
        };
      },
    },

    /*3.*/ complaints: {
      type: new GraphQLList(ComplaintType),
      args: {
        crop: { type: GraphQLString },
        category: { type: GraphQLString },
      },
      async resolve(parent, args) {
        if (args.crop === "all" && args.category === "all") {
          let agg = [
            {
              $group: {
                _id: {
                  farmer: "$farmer",
                },

                total: { $sum: 1 },
              },
            },
            { $sort: { total: -1 } },
          ];
          let logs = await Complaint.aggregate(agg);
          let modified = logs.map(function (log, index) {
            let obj = {
              farmer: log._id.farmer,
              count: log.total,
            };
            return obj;
          });
          return modified;
        } else if (args.crop === "all") {
          let agg = [
            {
              $group: {
                _id: {
                  farmer: "$farmer",
                  category: "$category",
                },

                total: { $sum: 1 },
              },
            },
            { $sort: { total: -1 } },
          ];
          let logs = await Complaint.aggregate(agg);
          let filtered = logs.filter(function (log) {
            return log._id.category == args.category;
          });
          let modified = filtered.map(function (log, index) {
            let obj = {
              farmer: log._id.farmer,
              count: log.total,
              ratings: 10,
              avg_rating: 3.6,
            };
            return obj;
          });

          return modified;
        } else if (args.category === "all") {
          let agg = [
            {
              $group: {
                _id: {
                  farmer: "$farmer",
                  crop: "$crop",
                },

                total: { $sum: 1 },
              },
            },
            { $sort: { total: -1 } },
          ];
          let logs = await Complaint.aggregate(agg);
          let filtered = logs.filter(function (log) {
            return log._id.crop == args.crop;
          });
          let modified = filtered.map(function (log, index) {
            let obj = {
              farmer: log._id.farmer,
              count: log.total,
              ratings: 10,
              avg_rating: 3.6,
            };
            return obj;
          });

          return modified;
        } else {
          let agg = [
            {
              $group: {
                _id: {
                  farmer: "$farmer",
                  category: "$category",
                  crop: "$crop",
                },

                total: { $sum: 1 },
              },
            },
            { $sort: { total: -1 } },
          ];
          let logs = await Complaint.aggregate(agg);
          let filtered = logs.filter(function (log) {
            return (
              log._id.category === args.category && log._id.crop === args.crop
            );
          });
          let modified = filtered.map(function (log, index) {
            let obj = {
              farmer: log._id.farmer,
              count: log.total,
              ratings: 10,
              avg_rating: 3.6,
            };
            return obj;
          });

          return modified;
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
