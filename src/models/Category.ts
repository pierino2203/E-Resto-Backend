import {Schema,model} from 'mongoose'

const categorySchema= new Schema({
  name:{
    type: String,
    require: true
  }
},{
  timestamps:true,
  versionKey: false
})

export default model('category',categorySchema)