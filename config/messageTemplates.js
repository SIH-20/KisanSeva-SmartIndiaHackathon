module.exports.farmerTemplateDisagree = (name, item, quantity, price, code) => {
  return `Dear Mr. ${name},

the buyer wants to buy ${item} given by you,
    
${quantity} kg in ${price} rupees.
    
**if you are satisfied, type  CBQHF <space> ${code} <space> 1 and send it to 9220592205.
    
**if you are not satisfied type  CBQHF <space> ${code} <space> 0 <new price> and send it to 9220592205.
    
**if you donot want to bargain,type  CBQHF <space> ${code} <space> 2 and send it to 9220592205.`;
};

module.exports.errorTemplate =
  "the format of the message sent by you is wrong,please send message in correct format.";

module.exports.buyerTemplateDisagree = (name, quantity, item, price, code) => {
  return `Dear Mr. ${name},

the farmer has not agreed for the price offered by you on ${item}.
    
he wants ${price} rupees for ${quantity}kg.
    
**if you are satisfied, type  CBQHF <space> ${code} <space> 1 and send it to 9220592205.
    
**if you are not satisfied type  CBQHF <space> ${code} <space> 0 <space> <new price> and send it to 9220592205.
    
**if you donot want to bargain,type  CBQHF <space> ${code} <space> 2 <new price> and send it to 9220592205.`;
};

module.exports.buyerTemplateAgree = (name, item) => {
  return `Dear ${name},

the farmer has  agreed for the price offered by you on ${item}.
    
*Thank you for shopping from buyFresh.
    `;
};
module.exports.farmerTemplateDone = (name, item) => {
  return `Dear Mr. ${name},

the buyer has  agreed for the price demanded by on ${item}.
    
*Thank you.`;
};
module.exports.stockTemplate = (item)=>{
  return (`the ${item} you ordered are currently not in stock.

  We will inform you shortly as soon as they are in stock.`
  )
};
module.exports.end = (name)=>{
  return(`Dear Mr.${name},
  the negotiation has been ended`);
}