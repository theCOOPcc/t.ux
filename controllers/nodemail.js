const nodemailer = require('nodemailer')

module.exports = {
    sendNodeMail,
}

function sendNodeMail(req,res){
    sendMail(req.body.subject, req.body.message, req.body.email, req.body.name)
    res.status(200).json('Email sent...')
}

function sendMail(subject, name, email, message){
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'myemailaddy@gmail.com',
            pass: process.env.GOOGLE_APP_PASSWORD  // or non gmail equivalent- i have only seen this used with gmail so far
        }
    });
    transporter.sendMail({
        from: 'myemailaddy@gmail.com',
        to: 'beingSentToThisAddy@gmail.com',  //${email}
        subject: `${subject}`,
        text: `${name}

        From:(${email})${message}`
    })
}