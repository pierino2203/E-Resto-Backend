import {Router} from 'express'
import { sendSubscribeEmail, sendUserBannedEmail, sendWelcomeEmail } from '../controllers/mailController';

const mailRouter = Router();

//por ahora todo por rutas, cuando tengamos las funciones de logueo y baneo de usuarios, se borran

mailRouter.post('/sendWelcomeMail', sendWelcomeEmail)
mailRouter.post('/sendSubscribeMail', sendSubscribeEmail)
mailRouter.post('/sendBanMail', sendUserBannedEmail)

export default mailRouter;