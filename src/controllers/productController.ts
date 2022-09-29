import { RequestHandler } from 'express'
import { isValidObjectId } from 'mongoose'
import Product from '../models/Products'

export const getProduct: RequestHandler = async (req,res) =>  {
  try {
    const product = await Product.find()
    res.status(200).json(product)
  } catch (error) {
    console.log('Error in get Products',error)
  }

}