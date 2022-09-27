import { Router } from "express"
import { deleteUser, editUser, findUserById, getUser, postUser } from "../controllers/userController";

const userRouter = Router()
userRouter.get('/user',getUser)
userRouter.post('/user',postUser)
userRouter.get('/user/:id',findUserById)
userRouter.delete('/user/:id',deleteUser)
userRouter.put('/user/:id',editUser)
export default userRouter;