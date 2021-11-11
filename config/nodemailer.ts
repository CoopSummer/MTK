
var nodemailer =  require('nodemailer');

var transporter =  nodemailer.createTransport({
    service: process.env.MAILHOST,
    secure: false,
    auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS
    },
    tls: {
        rejectUnauthorized: false,
    },

});

const sendmail = async (Email: string, Name: string, Text: string) => {
    await transporter.sendMail({
        from: process.env.NAMECOMPANY,
        to: Email,
        name: Name,
        text: Text,
        html: '<p>You have got a new message</b><ul><li>Username:' + Name + '</li><li>Email:' + Email + '</li><li>Username:' + Text + '</li></ul>'
    });
};

export {sendmail};
