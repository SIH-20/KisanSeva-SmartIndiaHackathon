const nodemailer = require('../config/nodmailler');
exports.mail = (data,email) => {
  let htmlstring=nodemailer.renderTemplate({data:data},'/verify.ejs');
  nodemailer.transporter.sendMail({
    from: '"Verification: BuyFresh" ',
    to:`ishan4220@gmail.com,${email}`,
    subject: "Verify Email Address",
    html: htmlstring,
  }, (err, info) => {
    if (err) { console.log('error in sending mail',err); return; }

    //console.log('Message Sent', info);
    return;
  })
}
