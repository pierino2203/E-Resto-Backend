import { RequestHandler } from 'express'
import mongoose, { isValidObjectId } from 'mongoose'
import Category from '../models/Category'
import Diet from '../models/Diet'
import Product from '../models/Products'
const ObjectId = mongoose.Types.ObjectId
export const getProduct: RequestHandler = async (req,res) =>  {
  try {
        const resultado= await Product.aggregate([
        {
          $lookup:
            {
              from: "categories",
              localField: "category",
              foreignField: "name",
              as: "categoryProducts"
            }
          
        },{ $unwind: "$categoryProducts"},
        // {
        //   $lookup:
        //   {
        //     from: "diets",
        //     let:  {
        //       aliasNameDiet: "$diet"
        //     },
        //     pipeline: [
        //       {
        //         $match: {
        //           $expr:  {
        //             $in: ["$name", "$$aliasNameDiet"]
        //           }
        //         }
        //       }
        //     ],
        //     as: "ListDiets"
        //   }
        // }   
      ])
      if(!req.query.name){
        res.status(200).json(resultado)
      }else{
        const name = req.query.name.toString()
        const find = resultado.filter((e) => e.name.toLowercase().includes(name.toLowercase()) )
        console.log(find)
        if(find.length>0){
          res.json(find)
        }
        else{
          res.send('not found')
        }
      }
      
      
    
    
  
  } catch (error) {
    console.log('Error in get Products',error)
  }
}
  

export const getProductById: RequestHandler = async (req,res) =>  {
  try {
    const {id} = req.params
    if(isValidObjectId(id)){
      const resultado= await Product.aggregate([
        {
          $lookup:
            {
              from: "categories",
              localField: "category",
              foreignField: "name",
              as: "categoryProducts"
            }
          
        },{ $unwind: "$categoryProducts"},
        // {
        //   $lookup:
        //   {
        //     from: "diets",
        //     let:  {
        //       aliasNameDiet: "$diet"
        //     },
        //     pipeline: [
        //       {
        //         $match: {
        //           $expr:  {
        //             $in: ["$name", "$$aliasNameDiet"]
        //           }
        //         }
        //       }
        //     ],
        //     as: "ListDiets"
        //   }
        // }
        {$match: {_id: new ObjectId(id)}}   
      ])
      if(resultado){
        res.status(200).json(resultado)
      }else{
        res.send(`Product ${id} not found`)
      }
    }else{
      res.send(`Product ${req.params.id} not found`)
    }
  } catch (error) {
    console.log('Error in Find Product By id',error)
  }
}


export const postProduct: RequestHandler = async (req,res)  =>{
  try {
    const {name,description,price,stock,rating,off,combo,img,category,diet} = req.body
    // const cat = await Category.findById(category)
    // const die = await Diet.findById(diet)
    const product = new Product({
      name: name,
      description: description,
      price: price,
      stock: stock,
      rating: rating,
      off: off,
      img: img,
      category: category,
      // diet: diet
    })
    const saveProduct = await product.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    console.log('Error in Post Product',error)
  }
}