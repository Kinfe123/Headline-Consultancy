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

app.post("/send", uploads.any('file'), (req, res) => {

    // console.log('The request data : ' , req)
    // console.log(req.file)
    const len = req.files.length
   
    const fileimg = req.files[len-1].buffer
    const fileitself = req.files[len-1].originalname
    const name = req.files[len-1].originalname.split('.')[0]
    





    // const fileimg = req.files[0].buffer
    // const fileItSelf = req.files[0].originalname
    // const img1 = req.files[0].buffer
    // const img2 = req.files[1].buffer
    // const img3 = req.files[2].buffer
    // const img4 = req.files[3].buffer
    // const img5 = req.files[4].buffer
    // const img6 = req.files[5].buffer
    // const img7 = req.files[6].buffer

    // const file3 = req.files[2].originalname
    // const file1 = req.files[0].originalname
    // const file2 = req.files[1].originalname
    // const file4 = req.files[3].originalname
    // const file5 = req.files[4].originalname
    // const file6 = req.files[5].originalname
    // const file7 = req.files[6].originalname
    const options = {
        from: process.env.AUTH_USER,
        to: process.env.TO_USER,
        subject:   `Hello Headways's, We have received a new Application from ${name}`,
         
        
    }
    console.log(req.files)
    if (req.files != undefined) {
       
        options.attachments = [
            
            // {   // file on disk as an attachment
            //     filename: file1,
            //     content: img1, // stream this file
            // },
            // {   // file on disk as an attachment
            //     filename: file2,
            //     content: img2, // stream this file
            // },
            // {   // file on disk as an attachment
            //     filename: file3,
            //     content: img3, // stream this file
            // },
            // {   // file on disk as an attachment
            //     filename: file4,
            //     content: img4, // stream this file
            // },
            // {   // file on disk as an attachment
            //     filename: file5,
            //     content: img5, // stream this file
            // },
            {   // file on disk as an attachment
                filename: fileitself,
                content: fileimg    , // stream this file
            },
            // {   // file on disk as an attachment
            //     filename:req.body.file.name,
            //     content: req.body.file, // stream this file
            // },
        ]
    
    }

    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
        }
        req.body = "Successfully sent"

        res.send({message: "success"})
        
        console.log("sent" + info.response)
    })

})


app.listen(port, () => {
    console.log(`Server started at ${port}`)
})

