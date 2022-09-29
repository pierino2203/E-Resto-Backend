import { Schema,model } from 'mongoose'


interface Product {
    name: string,
    description: string,
    price:number,
    stock:number,
    rating:number,
    off:boolean,
    category:string,
    // diet:Array,
    img:string
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
        require:true
    },
    rating:{
        type: Number
    },
    off:{
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
    // diet:{
    //     type: Array,
    //     default: []
    // }   
    
},{
    timestamps: true,
    versionKey:false
})

export default model('products',ProductSchema)