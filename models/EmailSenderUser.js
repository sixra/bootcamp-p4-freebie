import { google } from "googleapis";
import nodemailer from "nodemailer";

const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  EMAIL,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND,
  EMAIL
);

async function sendEmail(
  adTitle,
  receiverEmail,
  senderName,
  senderEmail,
  senderPhone,
  senderMessage,
  callback
) {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token");
      }
      resolve(token);
    });
  });

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
  });

  const mailOption = {
    from: EMAIL,
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
      callback(false);
    } else {
      callback(true);
    }
  });
}

export default { sendEmail };
