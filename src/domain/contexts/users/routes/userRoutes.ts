import { Router } from "express";
import multer from 'multer'
import uploadConfig from '../../../../infra/utils/upload'
import UserController from '@application/userController'

const userController = new UserController()
const routes = Router()
const upload = multer(uploadConfig)

routes.post('/', userController.create)
routes.get('/', userController.index)
routes.get('/:id', userController.show)
routes.put('/:id', userController.update)
routes.delete('/:id', userController.remove)
routes.post('/:id/image', upload.single('image'), userController.updateImage)

export default routes
