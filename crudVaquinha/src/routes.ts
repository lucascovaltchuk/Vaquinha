import { Router } from "express"
import vaquinhaService from "./vaquinha/service/vaquinha.service"
import vaquinhaController from "./vaquinha/controller/vaquinha.controller"

const routes = Router()

//vaquinha
routes.post('/vaquinha', vaquinhaController.create)
routes.get('/vaquinha', vaquinhaController.findAll)
routes.get('/vaquinha/:id', vaquinhaController.findById)
routes.put('/vaquinha/:id', vaquinhaController.update)
routes.delete('/vaquinha/:id', vaquinhaController.delete)


export{routes}