import { Router } from "express";
import multer from 'multer'
import uploadConfig from '../../../../infra/utils/upload'
import ProductController from '@application/productController'
const productController = new ProductController()
const routes = Router()
const upload = multer(uploadConfig)

routes.post('/', upload.single('image'), productController.create)
routes.get('/', productController.index)
routes.get('/:id', productController.show)
routes.put('/:id', productController.update)
routes.delete('/:id', productController.remove)
routes.get('/byTitle/:title', productController.getProductByTitle)
routes.get('/byCompany/:id', productController.getProductByCompany)
routes.post('/:id/image', upload.single('image'),productController.updateImage)

export default routes
