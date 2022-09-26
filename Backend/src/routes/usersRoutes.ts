import { Router } from "express"
import { getUser, postUser } from "../controllers/userController";

const userRouter = Router()
userRouter.get('/user',getUser)
userRouter.post('/user',postUser)
export default userRouter;