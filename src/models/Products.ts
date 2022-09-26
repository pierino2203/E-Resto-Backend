import { Schema,model } from 'mongoose'

const ProductSchema = new Schema({
    name:{
        type:String,
        require: true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    off:{
        type:Boolean,
        required:false
    },
    combo:{
        type:Boolean,
        required:false
    },
    img:{
        type:String,
        required:true
    }
})

export default model('products',ProductSchema)