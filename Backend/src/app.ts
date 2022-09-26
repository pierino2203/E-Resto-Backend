import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from '../src/routes/index'


const app = express()
app.use(morgan('dev'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/',router)

export default app