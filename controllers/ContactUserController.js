import { sendEmailUser } from "../models/EmailSenderUser.js";

export const contactUserEmailSend = (req, res) => {
  console.log(req.body);

  sendEmailUser.sendEmail(
    req.body.adTitle,
    req.body.receiverEmail,
    req.body.senderName,
    req.body.senderEmail,
    req.body.senderPhone,
    req.body.senderMessage,
    (ok) => {
      if (ok) {
        res.json("ok");
      } else {
        res.json("no");
      }
    }
  );
};
