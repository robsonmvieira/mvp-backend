import 'reflect-metadata'
import express from "express";
import "./infra/data"
import "@infra/container"
import companyRoutes from '@domain/contexts/users/routes/companyRoutes'
import addressRoutes from '@domain/contexts/users/routes/addressRoutes'
import userRoutes from '@domain/contexts/users/routes/userRoutes'

const app = express();


app.use(express.json())

app.use('/companies', companyRoutes)
app.use('/address', addressRoutes)
app.use('/users', userRoutes)




app.listen(8000, () => console.log("server running http://localhost:8000"));
