import nodemailer from "nodemailer";
import { google } from "googleapis";
// import { clientId, clientSecret, refreshToken } from "../config/config.js";
const OAuth2 = google.auth.OAuth2;

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  EMAIL,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN
);
function sendEmail(mailOption) {
  return new Promise((res, rej) => {
    oauth2Client.setCredentials({
      refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
    });
    const accessToken = oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL,
        clientId: MAILING_SERVICE_CLIENT_ID,
        clientSecret: MAILING_SERVICE_CLIENT_SECRET,
        refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
        accessToken,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    transporter.sendMail(message, function (err, info) {
      if (error) {
        rej(error);
        callback(false);
      } else {
        res(info.response);
        callback(true);
      }
    });
  });
}

export const sendEmailUser = function (
  adTitle,
  receiverEmail,
  senderName,
  senderEmail,
  senderPhone,
  senderMessage,
  callback
) {
  const mailOption = {
    from: `Back Office <$process.env.EMAIL>`,
    to: receiverEmail,
    subject: `Inquiry for your ad "${adTitle}"`,
    text:
      "\n" +
      "Name:  " +
      senderName +
      "\n" +
      "Email:  " +
      senderEmail +
      "\n" +
      "Phone:  " +
      senderPhone +
      "\n" +
      "Message: " +
      "\n" +
      senderMessage,
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
  return sendEmail(mailOption);
};
