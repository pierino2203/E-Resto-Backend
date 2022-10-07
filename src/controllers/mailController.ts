import {RequestHandler} from 'express'
import { isValidObjectId } from 'mongoose'
import { createTransporter } from '../emailer'
import { bannedUserTemplate, noBannedUserTemplate, welcomeTemplate } from '../htmlTemplates/templates'
import User from '../models/User'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

//  Para mail de registro:
export const sendWelcomeEmail : RequestHandler  = async (req, res) => {
    let {mail} = req.params
    if(mail) {
         try {
        const transporter = createTransporter()
        const info = await transporter.sendMail({
            from:'"Bienvenid@" <henrysfood@gmail.com>',
            to: `${mail}`,
            subject: `Bienvenid@!`,
            html: welcomeTemplate
        })
        console.log('mail sent')
        res.send(info)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
    } else {console.log(`didn't get user`)}
   
}

// Para input de suscripción
export const sendSubscribeEmail : RequestHandler = async (req, res) => {
    let {mail} = req.params
    if(mail) {
        try {
            const transporter = createTransporter()
            const info = await transporter.sendMail({
                from:'"Suscripción" <henrysfood@gmail.com>',
                to: `${mail}`,
                subject: `¡Gracias por suscribirte!`,
                html: welcomeTemplate
            })
            console.log('mail sent')
            res.send(info)
        } catch(err) {
            console.log(err)
            res.send(err)
        }
    } else {console.log(`didn't get email`)}
    
}

//para banear usuario
export const sendUserBannedEmail  =async (user:any) => {

        try {
            const transporter = createTransporter()
            const info = await transporter.sendMail({
                from:'"Usuario Baneado" <henrysfood@gmail.com>',
                to: `${user.mail}`,
                subject: `Hola ${user.name}`,
                html: bannedUserTemplate
            })
            console.log('mail sent')

            } catch(err) {
                console.log(err)
            }

    
    
}


export const sendUserNoBannedEmail  =async (user:any) => {
    try {
        const transporter = createTransporter()
        const info = await transporter.sendMail({
            from:'"Bienvenido de nuevo!" <henrysfood@gmail.com>',
            to: `${user.mail}`,
            subject: `Hola ${user.name}`,
            html: noBannedUserTemplate
        })
        console.log('mail sent')

        } catch(err) {
            console.log(err)
        }
}



export const sendForgotPassEmail = async (mail : String, text: String) => {
    
    try {
        const transporter = createTransporter()

        await transporter.sendMail({
            from: '"Recuperación de cuenta" <henrysfood@gmail.com>',
            to: mail,
            subject: 'Recuperá tu contraseña',
            text: `Hola! Recupera tu contraseña haciendo click en el siguiente enlace ${text}`,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

