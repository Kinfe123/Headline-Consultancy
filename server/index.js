const express = require('express')

let dotenv = require('dotenv').config()

const nodemailer = require('nodemailer')
const cors = require('cors')
const multer = require('multer')
const app = express()
const port = 4000

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASSWORD,
    }
})

app.use(cors())


app.get("/sendMail/:text", (req, res) => {
    const options = {
        from: process.env.AUTH_USER,
        to: process.env.TO_USER,
        subject: "Email sent with node js",
        text: req.params.text,
    }

    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
        }

        console.log("sent" + info.response)
    })

    res.send("Your email Has been sent")
})

const uploads = multer()

app.post("/uploadfile", uploads.single("file"), (req, res) => {

    console.log('The request data : ' , req)
    console.log(req.file)
    res.send("recieved")

    const options = {
        from: process.env.AUTH_USER,
        to: process.env.TO_USER,
        subject: "Hello, You have received an email",
        text:`
            First Name: ${req.body.first_name}
            Last Name: ${req.body.last_name}
            Email: ${req.body.email}
        `,
        
    }

    if (req.file != undefined) {
        options.attachments = [
            {
                filename: req.file.originalname,
                content: req.file.buffer
            }
        ]
    }

    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
        }
        req.body = "Successfully sent"
        
        console.log("sent" + info.response)
    })

})


app.listen(port, () => {
    console.log(`Server started at ${port}`)
})