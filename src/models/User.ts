import { Schema,model } from 'mongoose'

const UserSchema = new Schema({
  name:{
    type: String,
    require: true
  },
  lastName:{
    type: String,
    require: true
  },
  userName:{
    type: String,
    require: true,
    unique: true

  },
  mail:{
    type: String,
    require: true,
    unique: true
  },
  password:{
    type: String,
    require: true
  },
  adress:{
    type: String,
    require: true
  },
  admin:{
    type: Boolean,
    default: false
  },
  baneado:{
    type: Boolean,
    default: false
  },
  img:{
    type: String
  },
  orders:[{
    type: Schema.Types.ObjectId,
    ref: 'order'
  }]
},{
  timestamps: true,
  versionKey:false
})
 export default model('user',UserSchema)