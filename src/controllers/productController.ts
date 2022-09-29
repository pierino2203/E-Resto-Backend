import { RequestHandler } from 'express'
import Product from '../models/Products'

export const getProduct : RequestHandler = async (req, res) =>  {
  try {
    let {name} = req.query
    const product = await Product.find()
    if(name) {
      let nombre = name.toString()
      let products = product.filter(e => e.name.toLowerCase().includes(nombre?.toLowerCase()))
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

/*

    try {
      let {name} = req.query
      const product = await Product.find()
      if(name) {
        let products = product.filter(e => e.name.toLowerCase().includes(name?.toLowerCase()))
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
*/

