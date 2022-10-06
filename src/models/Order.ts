import {Schema,model} from 'mongoose'

const orderSchema = new Schema({
user_id:{
  type: Schema.Types.ObjectId,
  ref: 'user'
},
date:{
  type: Date,
  default: Date.now
},
payment:{
  type: String,
  // require: true
},
subtotal:{
  type: Number,
  // require: true
},
paid:{
  type: Boolean,
  // require: true
},
description:{
  type: String
},
products:{
  type: Array,
},
},{
    timestamps: true,
    versionKey: false
})
export default model('order',orderSchema)