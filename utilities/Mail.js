var nodemailer = require("nodemailer");
var fs = require('fs');
var path = require('path');

var transport = nodemailer.createTransport( {

    host: 'smtp.gmail.com',
    secureConnection: true,
    port: 465,
    service: 'Gmail',
    auth: {
        user: "abhilashreddy76@gmail.com",
        pass: "password"
    }
});

console.log("SMTP Configured");

var mailOptions = {
    from: 'abhilashreddy76@gmail.com', // sender address
    to: 'abhilashreddymamidi@hotmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
    //text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    /*attachments: [
        {

            'path': "C:/Users/Abhi/WebstormProjects/ProtractorTests/winston-basic.txt"

        }]*/
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        response.send(err);
    } else {
        console.log("Message sent: " + info.response);
        response.send(info);
    }

});