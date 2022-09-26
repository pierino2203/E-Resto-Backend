import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.URI || "error" 
void (async () => {
  try {
    const db = await mongoose.connect(URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    })
    console.log('DB is connect to: ', db.connection.name)
  } catch (error) {
    console.log('Error in connect DB', error)
  }
})()
