const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});

exports.sendMail = function(fullName, phone, email, message, emailTo, emailTitle, cb) {
  const mailOptions = {
    to: emailTo,
    subject: emailTitle,
    html: `İsminiz: ${fullName}<br>Telefon Numaranız: ${phone}<br>Email Adresiniz: ${email}<br>Mesajınız: ${message}<br>`
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}
