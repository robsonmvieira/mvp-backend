import { Router } from "express";

import UserController from '@application/userController'

const userController = new UserController()
const routes = Router()

routes.post('/', userController.create)
routes.get('/', userController.index)
routes.get('/:id', userController.show)
routes.put('/:id', userController.update)
routes.delete('/:id', userController.remove)

export default routes
