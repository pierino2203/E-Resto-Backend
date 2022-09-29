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
    stock:{
        type:Number,
        require:true
    },
    rating:{
        type: Number
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
    },
    category:{
        type: String
    },
    diet:{
        type: Array,
        default: []
    }   
    
},{
    timestamps: true,
    versionKey:false
})

export default model('products',ProductSchema)