import { RequestHandler } from 'express'
import User from '../models/User'
export const getUser: RequestHandler = async (req,res) => {
  try {
    const users= await User.find()
    res.status(200).json(users)
  } catch (error) {
    console.log('Error in getUser',error)
  }
}
export const postUser: RequestHandler = async (req,res) =>  {
  try {
    const {name,lastName,userName,mail,admin,img} = req.body
    if( !name || !lastName || !userName || !mail) {res.send('Missing data required')}
    const userFind = await User.findOne({mail: mail})
    if(userFind != null){
      res.status(404)
    } else{
      const user = new User(req.body)
      const saveUser = await user.save()
      res.json(saveUser)
    }  
  }
   catch (error) {
    console.log('Error un postUser',error)
  } 
}

