const nodemailer = require('nodemailer');

module.exports = {
  sendNodeMail,
};

function sendNodeMail(req, res) {
  console.log('send invite emails', req.body);
  const { _id: groupId } = req.body;
  // const { invited } = req.body;
  // need to update to group selected
  const inviteList = ['corys4139@gmail.com'];
  // invited.forEach((invite) => {
  //   invite.invited === true && inviteList.push(invite.email);
  // });
  inviteList.forEach((email) => {
    sendMail(email, groupId);
  });
  res.status(200).send('Email sent...')
}

function sendMail(email, groupId) {
  const link = 
  `localhost:3000/login`
  // `tux-staging.herokuapp.com/login/`;
  const subject = 'Welcome To Tux';
  const userName = 'Cory Spicer';
  const managerName= 'Sarah Cooper';
  const anotherLink = '';
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
    html: `<p>Hi ${userName},</p>
      <br></br>
      <p>Welcome to t.ux,</p>
      <br></br>
      <p>You've been invited by your instructor ${managerName} to take one of our activities. If it is your first time, you will need to sign up for an account with your gmail in order to gain access. If you don't have a gmail account you'll need to create one <a href=${link}>here</a>.</p>
      <br></br>
      <p> on the link below to get started:</p>
      <a href=${anotherLink}>Already have an account? Click Here!</a>
      <br></br>
      <p>Thanks,<p>
      <br></br>
      <p>-The t.ux team</p>
      `,
  });
}
