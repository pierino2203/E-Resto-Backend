import {Router} from 'express'
import { sendSubscribeEmail, sendUserBannedEmail, sendWelcomeEmail } from '../controllers/mailController';

const mailRouter = Router();

mailRouter.post('/sendWelcomeMail', sendWelcomeEmail)
mailRouter.post('/sendSubscribeMail', sendSubscribeEmail)
mailRouter.post('/sendBanMail', sendUserBannedEmail)

export default mailRouter;