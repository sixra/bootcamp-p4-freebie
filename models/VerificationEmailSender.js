import nodemailer from "nodemailer";

function sendEmail(message) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
}

export const sendConfirmationEmail = function ({ toUser, hash }) {
  const message = {
    from: process.env.GOOGLE_USER,
    // to: toUser.email // in production uncomment this
    to: process.env.GOOGLE_USER,
    subject: "Your App - Activate Account",
    html: `
      <h3> Hello ${toUser.name} </h3>
      <p>Thank you for registering into our Application. Much Appreciated! Just one last step is laying ahead of you...</p>
      <p>To activate your account please follow this link: <a target="_" href="${process.env.DOMAIN}/api/activate/user/${hash}">Activate Link</a></p>
      <p>Cheers</p>
      <p>Your Application Team</p>
    `,
  };

  return sendEmail(message);
};
