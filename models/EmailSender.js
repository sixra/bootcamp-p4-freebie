import nodemailer from "nodemailer";
import { google } from "googleapis";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  EMAIL,
} = process.env;

const OAuth2 = google.auth.OAuth2;

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

export const sendEmailConf = function (contactName, email, message, callback) {
  const mailOption = {
    from: `Back Office <$process.env.EMAIL>`,
    to: process.env.GOOGLE_USER,
    subject: "Message from Freebie",
    text:
      "\n" +
      "Contact Name:  " +
      contactName +
      "\n" +
      "email:  " +
      email +
      "\n" +
      "Message: " +
      "\n" +
      message,
  };
  return sendEmail(mailOption);
};
