import { RequestHandler } from 'express'
import Product from '../models/Products'

export const getProduct : RequestHandler = async (req, res) =>  {
  try {
    let {name} = req.query
    const product = await Product.find()
    if(name) {
      let stringName = name.toString()
      let products = product.filter(e => e.name.toLowerCase().includes(stringName?.toLowerCase()))
        if(!products.length) {
          return res.send(product)
        } else {
            return res.json(products)
        }
    }
    res.status(200).json(product)
  } catch (error) {
    console.log('Error in get Products',error)
  }

}

export const editProduct : RequestHandler = async (req, res) => {
  try {
    console.log('entra al try')
  }
  catch (err) {
    console.log(err)
  }
}