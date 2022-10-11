import {RequestHandler} from 'express'

import { createTransporter } from '../emailer'
import { adminTemplate, bannedUserTemplate, noBannedUserTemplate, welcomeTemplate } from '../htmlTemplates/templates'
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

//avisar a usuario que no está más baneado
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


//recuperar contraseña
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

//avisar que el usuario es ahora admin

export const sendAdminWelcome  =async (user:any) => {
    try {
        const transporter = createTransporter()
        const info = await transporter.sendMail({
            from:'"Felicitaciones, eres Administrador!" <henrysfood@gmail.com>',
            to: `${user.mail}`,
            subject: `Hola ${user.name}`,
            html: adminTemplate
        })
        console.log('mail sent')

        } catch(err) {
            console.log(err)
        }
}

//para enviar compra

export const sendBuyEmail = async (mail: any, order:any) => {
    if(mail) {
         try {
        const transporter = createTransporter()
        const info = await transporter.sendMail({
            from:'"Gracias por tu compra!" <henrysfood@gmail.com>',
            to: `${mail}`,
            subject: `Gracias por comprar en Henry's Food! `,
            html: `<div>Te enviamos los detalles de tu compra: 
                        <h2>Subtotal: ${order.subtotal}</h2>
                        <p>Productos: ${order.products.map((e:any) => e)}</p>
                    
                    </div>`
        })
        console.log('mail sent')
        return info
    } catch(err) {
        console.log(err)
        return(err)
    }
    } else {return console.log(`didn't get user`)}
   
}