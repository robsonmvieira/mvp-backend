import { Router } from "express";

import CompanyController from '@application/companyController'

const companyController = new CompanyController()
const routes = Router()

routes.post('/', companyController.create)
routes.get('/', companyController.index)
routes.get('/:id', companyController.show)
routes.put('/:id', companyController.update)
routes.delete('/:id', companyController.remove)

export default routes
