import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

function sendEmail(contactName, email, message, callback) {
  const mailOption = {
    from: "brah.freebie@gmail.com",
    to: "b.brisilda1552@gmail.com",
    subject: "Message from Freebie",
    text: "\n" + "Contact Name:  " +  contactName + "\n" + "email:  " + email + "\n" + "Message: " + "\n" + message,
  };
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
      callback(false);
    } else {
      console.log(info.response);
      callback(true);
    }
  });
}

export default { sendEmail };