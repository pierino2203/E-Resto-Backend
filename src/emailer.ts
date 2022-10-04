const nodemailer = require('nodemailer')

export const createTransporter = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "1164d8ee3a90cd",
            pass: "fa59fd24011498"
        }
    })
    return transport
}