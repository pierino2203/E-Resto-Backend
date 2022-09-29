import { RequestHandler } from 'express'
import mongoose, { isValidObjectId } from 'mongoose'
import Category from '../models/Category'
import Diet from '../models/Diet'
import Product from '../models/Products'
const ObjectId = mongoose.Types.ObjectId
export const getProduct: RequestHandler = async (req,res) =>  {
  // try {
  //   const {name} = req.query
  //   if(name){
  //     const find = await Product.findOne({name: name})
  //     find
  //     ? res.status(200).json({name: name})
  //     : res.send({msg: `Product ${name} not found`})  
  //   }else{
  //     const product = await Product.find()
  //     res.status(200).json(product)
  //   }
  // } catch (error) {
  //   console.log('Error in get Products',error)
  // }
  const {name} = req.query;
  if(name){
    const findName= await Product.aggregate([
      {
        $lookup:
          {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "categoryProducts"
          }
        
      },{ $unwind: "$categoryProducts"},
      {
        $lookup:
        {
          from: "diets",
          let:  {
            aliasNameDiet: "$diet"
          },
          pipeline: [
            {
              $match: {
                $expr:  {
                  $in: ["$name", "$$aliasNameDiet"]
                }
              }
            }
          ],
          as: "ListDiets"
        }
      }    
    ])
    if(findName){
      res.status(200).json(findName)
    }else{
      res.send(`Product ${name} not found`)
    }
    
  }
  const resultado= await Product.aggregate([
    {
      $lookup:
        {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "categoryProducts"
        }
      
    },{ $unwind: "$categoryProducts"},
    {
      $lookup:
      {
        from: "diets",
        let:  {
          aliasNameDiet: "$diet"
        },
        pipeline: [
          {
            $match: {
              $expr:  {
                $in: ["$name", "$$aliasNameDiet"]
              }
            }
          }
        ],
        as: "ListDiets"
      }
    },{$match: {name: name}}    
  ])
  res.status(200).json(resultado)
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
              foreignField: "_id",
              as: "categoryProducts"
            }
          
        },{ $unwind: "$categoryProducts"},
        {
          $lookup:
          {
            from: "diets",
            let:  {
              aliasNameDiet: "$diet"
            },
            pipeline: [
              {
                $match: {
                  $expr:  {
                    $in: ["$name", "$$aliasNameDiet"]
                  }
                }
              }
            ],
            as: "ListDiets"
          }
        },{$match: {_id: new ObjectId(id)}}    
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
    const cat = await Category.findById(category)
    // const die = await Diet.findById(diet)
    const product = new Product({
      name: name,
      description: description,
      price: price,
      stock: stock,
      rating: rating,
      off: off,
      combo: combo,
      img: img,
      category: cat?._id,
      diet: diet
    })
    const saveProduct = await product.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    console.log('Error in Post Product',error)
  }
}