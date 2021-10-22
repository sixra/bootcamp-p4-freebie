import nodemailer from "nodemailer";

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

function sendEmail(adTitle, receiverEmail, senderName, senderEmail, senderPhone, senderMessage, callback) {
  const mailOption = {
    from: "brah.freebie@gmail.com",
    to: receiverEmail,
    subject: `Inquiry for your ad "${adTitle}"`,
    text:
      "\n" + "Name:  " + senderName +
      "\n" + "Email:  " + senderEmail +
      "\n" + "Phone:  " + senderPhone +
      "\n" + "Message: " + "\n" + senderMessage,
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
