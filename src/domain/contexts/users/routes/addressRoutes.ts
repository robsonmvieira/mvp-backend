import { Router } from "express";

import AdressController from '@application/addressController'

const addressController = new AdressController()
const routes = Router()

routes.post('/', addressController.create)
routes.get('/', addressController.index)
routes.get('/:id', addressController.show)
routes.put('/:id', addressController.update)
routes.delete('/:id', addressController.remove)

export default routes
