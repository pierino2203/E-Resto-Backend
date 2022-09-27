import {RequestHandler} from 'express'
import { isValidObjectId } from 'mongoose'
import Order from '../models/Order'
import User from '../models/User'

export const getOrders: RequestHandler = async (req,res ) =>  {
  try {
    const orders = await Order.find().populate('user_id',{
      _id: 1,
      name: 1,
      mail: 1
    })
    res.status(200).json(orders)
  } catch (error) {
    console.log('Error en Get Orders')
  }
}
export const postOrders: RequestHandler = async (req,res)  =>  {
  try {
    const {user_id,date,payment,subtotal,paid,description} = req.body
    const user: any = await User.findById(user_id);
    const newOrder = new Order({
      user_id: user?._id,
      date: date,
      payment: payment,
      subtotal: subtotal,
      paid: paid,
      description: description
    })
    const saveOrder: any = await newOrder.save();
    const id_order = saveOrder._id
    // console.log(saveOrder.id);
    user.orders= user.orders.concat(id_order);
    await user.save()
    res.status(200).json(saveOrder)
  } catch (error) {
    console.log('Error in post Order',error)
  }
}

export const getOrderById: RequestHandler = async (req,res)  =>  {
  try {
    const {id} = req.params
    if(isValidObjectId(id)){
      const order = await Order.findById(id).populate('user_id',{
        _id: 1,
        name: 1,
        mail: 1
      })
      order
      ? res.send(order)
      : res.send('Order not found')
    }else{
      res.send('Order not found')
    }
  } catch (error) {
    console.log('Error in find Order By Id',error)
  }
  
}

export const deleteOrder: RequestHandler = async (req,res)  =>{
  try{
    const {id} = req.params
    if(isValidObjectId(id)){
      const order = await Order.findByIdAndDelete(id)
      order
      ? res.status(200).json({ msg: `Deleted User ${id}`})
      : res.send('Order not found')
    }else{
      res.send('Order not found')
    }
  }
  catch(error){
    console.log('Error in delete Order',error)
  }
}

export const editOrder: RequestHandler = async (req,res)  =>  {
  try {
    const {id}= req.params
    if(isValidObjectId(id)){
      const order = await Order.findByIdAndUpdate(id,req.body)
      order
      ? res.status(200).json(order)
      : res.send('Order not found')
    }else{
      res.send('Order not found')
    }
  } catch (error) {
    console.log('Error in Edit Order',error)
  }
}