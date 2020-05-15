import 'reflect-metadata'
import express from "express";
import "./infra/data"
import "@infra/container"
import productRoutes from '@domain/contexts/product/routes/productRoutes'
import companyRoutes from '@domain/contexts/users/routes/companyRoutes'
import addressRoutes from '@domain/contexts/users/routes/addressRoutes'
import userRoutes from '@domain/contexts/users/routes/userRoutes'
const app = express();

import uploadConfig from './infra/utils/upload'

app.use(express.json())

app.use('/companies', companyRoutes)
app.use('/products', productRoutes)
app.use('/address', addressRoutes)
app.use('/users', userRoutes)
app.use('/files', express.static(uploadConfig.directory))

app.listen(8000, () => console.log("server running http://localhost:8000"));
