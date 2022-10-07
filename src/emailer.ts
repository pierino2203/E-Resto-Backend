const nodemailer = require('nodemailer')

export const createTransporter = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "tastehenrysfood@gmail.com",
            pass: "zqeipmfcshggejst"
        }
    })
    return transport
}