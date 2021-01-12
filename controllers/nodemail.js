const nodemailer = require('nodemailer');

module.exports = {
  sendNodeMail,
};

function sendNodeMail(req, res) {
  // console.log('send invite emails', req.body);
  const { _id: groupId } = req.body;
  // const { invited } = req.body;
  const inviteList = ['danb.dul@gmail.com'];
  // invited.forEach((invite) => {
  //   invite.invited === true && inviteList.push(invite.email);
  // });
  inviteList.forEach((email) => {
    sendMail(email, groupId);
  });
  // res.status(200).json('Email sent...')
}

function sendMail(email, groupId) {
  const link = `localhost:3000/signup/${groupId}/${email}`;
  const subject = 'Welcome To Tux';
  const message = `You have been invited to Tux, click on the link below to sign up. ${link}`;
  const name = '';
  let transporter = nodemailer.createTransport({
    host: 'smtp.dreamhost.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@thecoop.cc',
      pass: process.env.COOP_EMAIL_PASSWORD, // or non gmail equivalent- i have only seen this used with gmail so far
    },
  });
  transporter.sendMail({
    from: 'info@thecoop.com',
    to: email,
    subject: `${subject}`,
    text: `Hey You

        ${message}`,
  });
}
