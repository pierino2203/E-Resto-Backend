import {RequestHandler} from 'express'
import { createTransporter } from '../emailer'
import { bannedUserTemplate, welcomeTemplate } from '../htmlTemplates/templates'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

//  Para mail de registro:
export const sendWelcomeEmail : RequestHandler  = async (req, res) => {
    let user = req.body
    if(user) {
         try {
        const transporter = createTransporter()
        const info = await transporter.sendMail({
            from:'"Bienvenid@" <henrysfood@gmail.com>',
            to: `${user.mail}`,
            subject: `Bienvenid@ ${user.name}!`,
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
export const sendUserBannedEmail : RequestHandler =async (req, res) => {
    let user = req.body
    if(user) {
         try {
        const transporter = createTransporter()
        const info = await transporter.sendMail({
            from:'"Usuario Baneado" <henrysfood@gmail.com>',
            to: `${user.mail}`,
            subject: `Hola ${user.name}`,
            html: bannedUserTemplate
        })
        console.log('mail sent')
        res.send(info)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
    } else {console.log(`didn't get user`)}
}