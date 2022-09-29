import { Schema,model } from 'mongoose'

interface Product {
    name: string,
    description: string,
    price:number,
    stock:number,
    rating:number,
    off:boolean,
    img:string,
    createdAt: Date,
    updatedAt: Date
}

const ProductSchema = new Schema<Product>({
    name:{
        type:String,
        required: true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    rating:{
        type: Number
    },
    off:{
        type:Boolean,
        required:true,
        default: false
    },
    img:{
        type:String,
        required:true,
        default: 'https://res.cloudinary.com/luubermudezz/image/upload/v1664466217/E-Commerce%20Food/avatar_pdkofa.jpg'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export default model('products',ProductSchema)