const express = require("express");
const router = express.Router();
const passport = require("passport");
// const Item = require("../../models/item");
const homeController = require("../../controllers/api/api_home_controller");
// const Items = require("../../models/item");
// const Feedback = require("../../models/Feedback");
// const Complaints = require("../../models/Complaint");
// const Category = require("../../models/Category");
// const Item = require("../../models/item");
const Block = require("../../models/Block");
const Farmer = require("../../models/Farmer");
const { ObjectId } = require("mongoose").Types;
const Request = require("../../models/requests");
router.use("/mobile", require("./mobile"));
router.post("/submit-number", homeController.numberVerification);
router.post("/submit-otp", homeController.submitOtpfromAdmin);
router.get(
  "/check-session",
  passport.authenticate("jwt", { session: false }),
  homeController.checkSession
);
router.post("/take-action", homeController.takeAction);
router.post("/handle-request", homeController.requestHandler);
router.get("/insert", async (req, res) => {
  let request = await Request.create({
    farmer: "5ef49c012c910ce79a9fafba",
    content: "I was facing weather problems",
    crop: "wheat",
    category: "classic",
  });
  return res.status(200).json({
    data: request,
  });
});

router.get('/all',async (req,res)=>{

  let comps = await Request.create({
    farmer:"5f009301d4017f23a83dede6",
    content:"the irriagation system is damaged in my area",
    crop:"raggi",
    category:"classic"
  });
  return res.status(200).json({
    data:{
      cm:comps
    }
  });
})

router.get('/al-i',async (req,res)=>{

  let comps = await Farmer.findOne({name:"Ram"});

  return res.status(200).json({
    data:{
      cm:comps
    }
  });
})
module.exports = router;
