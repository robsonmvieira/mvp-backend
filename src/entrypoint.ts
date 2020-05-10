import 'reflect-metadata'
import express from "express";
import "./infra/data"
import "@infra/container"
import companyRoutes from '@domain/contexts/users/routes/companyRoutes'

const app = express();


app.use(express.json())

app.use('/companies', companyRoutes)




app.listen(8000, () => console.log("server running http://localhost:8000"));
