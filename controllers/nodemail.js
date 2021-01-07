const nodemailer = require('nodemailer');

module.exports = {
  sendNodeMail,
};

function sendNodeMail(req, res) {
  console.log('send invite emails', req.body);
  const { invited } = req.body;
  const inviteList = [];
  invited.forEach((invite) => {
    invite.invited === true && inviteList.push(invite.email);
  });
  inviteList.forEach((email) => {
    sendMail(email);
  });
  // res.status(200).json('Email sent...')
}

function sendMail(email) {
  const subject = 'Welcome To Tux';
  const message =
    'You have been invited to Tux, click on the link below to sign up.';
  const name = '';
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'myemailaddy@gmail.com',
      pass: process.env.GOOGLE_APP_PASSWORD, // or non gmail equivalent- i have only seen this used with gmail so far
    },
  });
  transporter.sendMail({
    from: 'myemailaddy@gmail.com',
    to: email,
    subject: `${subject}`,
    text: `Hey You

        From:(${email})${message}`,
  });
}
