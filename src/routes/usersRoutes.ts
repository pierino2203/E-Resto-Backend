import { Router } from "express"
import { deleteUser, editUser, findUserById, getUser, postUser, userLogin, userRegister, userToken } from "../controllers/userController";
import {verifyToken} from '../controllers/utils/verify'

const userRouter = Router()
userRouter.get('/user',getUser)
userRouter.post('/user',postUser)
// userRouter.get('/user/:id',findUserById)
userRouter.delete('/user/:id',deleteUser)
userRouter.put('/user/:id',editUser)
userRouter.post('/user/register',userRegister)
userRouter.post('/user/login', userLogin)
userRouter.get('/user/token',verifyToken,userToken)
export default userRouter;