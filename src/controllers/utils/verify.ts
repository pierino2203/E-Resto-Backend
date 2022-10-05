const jwt=require('jsonwebtoken')
import dotenv from 'dotenv'
import { RequestHandler } from 'express'
dotenv.config()

export const verifyToken: RequestHandler= async (req: any,res, next)  =>  {
    try {
        const token= req.headers['x-access-token']
        console.log(token)
        if(!token){
            console.log('hola')
            return res.status(401).json({auth: false,message:'Token not found'})
        }
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        console.log(process.env.SECRET_KEY)
        console.log(decoded)
        req.userId = decoded.id
        next()
    } catch (error) {
        console.log('Error in verify Token',error)
    }

}
