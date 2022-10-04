import {RequestHandler} from 'express'
import { createTransporter } from '../emailer'
import { bannedUserTemplate, welcomeTemplate } from '../htmlTemplates/templates'

//  Para mail de registro:
export const sendWelcomeEmail : RequestHandler  = async (req, res) => {
    let user = req.body
    if(user) {
         try {
        const transporter = createTransporter()
        const info = await transporter.sendMail({
            from:'henrysfood@mail',
            to: `${user.mail}`,
            subject: `Hello ${user.name}`,
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

export const sendSubscribeEmail : RequestHandler =async (req, res) => {
    let mail = req.body
    if(mail) {
        try {
            const transporter = createTransporter()
            const info = await transporter.sendMail({
                from:'henrysfood@mail',
                to: `${mail}`,
                subject: `Hello new subscriber!`,
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

export const sendUserBannedEmail : RequestHandler =async (req, res) => {
    let user = req.body
    if(user) {
         try {
        const transporter = createTransporter()
        const info = await transporter.sendMail({
            from:'henrysfood@mail',
            to: `${user.mail}`,
            subject: `Hello ${user.name}`,
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