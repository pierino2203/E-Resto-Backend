import { Schema,model } from 'mongoose'

interface Product {
    name: string,
    description: string,
    price:number,
    stock:number,
    rating:number,
    off:boolean,
    img:string,
    createdAt: Date
}

const ProductSchema = new Schema<Product>({
    name:{
        type:String,
        required: true
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
        default: 'https://static2.elnortedecastilla.es/www/pre2017/multimedia/noticias/201501/12/media/cortadas/facebook-profile-picture-no-pic-avatar--575x323.jpg'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export default model('products',ProductSchema)