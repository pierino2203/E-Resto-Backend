import {Schema,model} from 'mongoose'

const orderSchema = new Schema({
user_id:{
  type: Schema.Types.ObjectId,
  ref: 'user'
},
date:{
  type: Date,
},
payment:{
  type: String,
  require: true
},
subtotal:{
  type: String,
  require: true
},
paid:{
  type: Boolean,
  require: true
},
description:{
  type: String
}
},{
    timestamps: true,
    versionKey: false
})
export default model('order',orderSchema)