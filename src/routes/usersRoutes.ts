import { Router } from "express"
import { banUser, deleteUser, editUser, findUserById, getUser, noBanUser, postUser } from "../controllers/userController";

const userRouter = Router()
userRouter.get('/user',getUser)
userRouter.post('/user',postUser)
userRouter.get('/user/:id',findUserById)
userRouter.delete('/user/:id',deleteUser)
userRouter.put('/user/:id',editUser)
userRouter.post('/banUser/:id', banUser)
userRouter.post('/noBanUser/:id', noBanUser)


export default userRouter;