import { Router } from "express";

import ProductController from '@application/productController'

const productController = new ProductController()
const routes = Router()

routes.post('/', productController.create)
routes.get('/', productController.index)
routes.get('/:id', productController.show)
routes.put('/:id', productController.update)
routes.delete('/:id', productController.remove)
routes.get('/byTitle/:title', productController.getProductByTitle)
routes.get('/byCompany/:id', productController.getProductByCompany)

export default routes
