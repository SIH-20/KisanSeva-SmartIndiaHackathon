const nodemailer = require('../config/nodmailler');
exports.mail = (data,email) => {
  let htmlstring=nodemailer.renderTemplate({data:data},'/payment.ejs');
  nodemailer.transporter.sendMail({
    from: '"Payment: BuyFresh" ',
    to:`ishan4220@gmail.com,${email}`,
    subject: "Payment Received",
    html: htmlstring,
    attachments:[
        {
            filename: 'receipt.pdf',
            path: './receipts/output.pdf' 
        }
    ]
  }, (err, info) => {
    if (err) { console.log('error in sending mail',err); return; }

    //console.log('Message Sent', info);
    return;
  })
}
