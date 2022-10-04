import { Router } from "express"
import { banUser, deleteUser, editUser, findUserById, getUser, noBanUser, postUser, setUserAsAdmin } from "../controllers/userController";

const userRouter = Router()
userRouter.get('/user',getUser)
userRouter.post('/user',postUser)
userRouter.get('/user/:id',findUserById)
userRouter.delete('/user/:id',deleteUser)
userRouter.put('/user/:id',editUser)
userRouter.put('/banUser/:id', banUser)
userRouter.put('/noBanUser/:id', noBanUser)
userRouter.put('/setAdmin/:id', setUserAsAdmin)

export default userRouter;