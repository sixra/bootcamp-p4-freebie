import nodemailer from "nodemailer";
import { google } from "googleapis"
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground"

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  EMAIL,
  GOOGLE_USER
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND,
  EMAIL
)

function sendEmail(contactName, email, message, callback) {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  })
  const accessToken = oauth2Client.getAccessToken()
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      pass: process.env.PASSWORD,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken
    }
  })
  const mailOption = {
    from: "brah.freebie@gmail.com",
    to: GOOGLE_USER,
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
