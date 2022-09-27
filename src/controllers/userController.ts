import { Handler, RequestHandler } from 'express'
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

export const findUserById: RequestHandler = async (req,res) => {
  try {
    const {id} = req.params
    if(id.length===24){
      const user = await User.findById(id)
      user
      ? res.send(user)
      : res.send('User not found')
    }else{
      res.send('User not found')
    }
  } catch (error) {
    console.log('Error in find User By Id',error)
  }
}

export const deleteUser: RequestHandler = async (req,res) =>  {
  try{
    const {id} = req.params
    if(id.length === 24){
      const user = await User.findByIdAndDelete(id)
      user
      ? res.status(200).json({ msg: `Deleted User ${id}`})
      : res.send('User not found')
    }else{
      res.send('User not found')
    }
  }
  catch(error){
    console.log('Error in delete User',error)
  }
}

export const editUser: RequestHandler = async (req,res) =>  {
  try {
    const {id}= req.params
    if(id.length === 24){
      const user = await User.findByIdAndUpdate(id,req.body)
      user
      ? res.status(200).json(user)
      : res.send('User not found')
    }else{
      res.send('User not found')
    }
  } catch (error) {
    console.log('Error in Edit User',error)
  }
}


