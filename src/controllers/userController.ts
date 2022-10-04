import { RequestHandler } from 'express'
import { isValidObjectId } from 'mongoose'
import User from '../models/User'

export const getUser: RequestHandler = async (req,res) => {
  try {
    const users= await User.find().populate('orders',{
      user_id: 0,
      createdAt: 0,
      updatedAt: 0
    })
    res.status(200).json(users)
  } catch (error) {
    console.log('Error in getUser',error)
  }
}
export const postUser: RequestHandler = async (req,res) =>  {
  try {
    const {name,lastName,userName,adress,password,mail,admin,img} = req.body
    // if( !name || !lastName || !userName || !mail) {res.send('Missing data required')}
    const userFind = await User.findOne({mail: mail})
    if(userFind === null){
      const user = new User(req.body)
      const saveUser = await user.save()
      res.json(saveUser)
      
    } else{
      // const order = await Order.findById(order_id);
      res.send('User already exist')
    }  
  }
   catch (error) {
    console.log('Error un postUser',error)
  } 
}

export const findUserById: RequestHandler = async (req,res) => {
  try {
    const {id} = req.params
    if(isValidObjectId(id)){
      const user = await User.findById(id).populate('orders',{
        user_id: 0,
        createdAt: 0,
        updatedAt: 0
      })
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
    if(isValidObjectId(id)){
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
    if(isValidObjectId(id)){
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


export const banUser : RequestHandler = async (req, res) => {
  let {id} = req.params
  const update = {baneado: true}
  if(isValidObjectId(id)) {
    try {
      const user = await User.findByIdAndUpdate(id, update, {
        new: true
      })
      res.send(user)
    } catch(err) {
      res.send(err)
    }
  }
  else {console.log(`didn't get id correctly`)}
}

export const noBanUser : RequestHandler = async (req, res) => {
  let {id} = req.params
  const update = {baneado: false}
  if(isValidObjectId(id)) {
    try {
      const user = await User.findByIdAndUpdate(id, update, {
        new: true
      })
      res.send(user)
    } catch(err) {
      res.send(err)
    }
  }
  else {console.log(`didn't get id correctly`)}
}

export const setUserAsAdmin : RequestHandler = async (req, res) => {
  let {id} = req.params
  const update = {admin: true}
  if(isValidObjectId(id)) {
    try{
      const user = await User.findByIdAndUpdate(id, update, {
        new: true
      })
      res.send(user)
    } catch(err) {
      res.send(err)
    }
  } else {
    console.log(`didn't get id correctly`)
  }
}