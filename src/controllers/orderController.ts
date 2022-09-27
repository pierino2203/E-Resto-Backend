import {RequestHandler} from 'express'
import Order from '../models/Order'
import User from '../models/User'

export const getOrders: RequestHandler = async (req,res ) =>  {
  try {
    const orders = await Order.find();
    res.status(200).json(orders)
  } catch (error) {
    console.log('Error en Get Orders')
  }
}
export const postOrders: RequestHandler = async (req,res)  =>  {
  try {
    const {user_id,date,payment,subtotal,paid,description} = req.body
    const user = await User.findById(user_id);
    const newOrder = new Order({
      user_id: user?._id,
      date: date,
      payment: payment,
      subtotal:subtotal,
      paid:paid,
      description:description
    })
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder)
  } catch (error) {
    console.log('Error in post Order',error)
  }
}