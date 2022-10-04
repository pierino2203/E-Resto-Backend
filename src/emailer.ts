const nodemailer = require('nodemailer')

export const createTransporter = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "bermudez.luciana9@gmail.com",
            pass: "wmdcjkapreejulfn"
        }
    })
    return transport
}