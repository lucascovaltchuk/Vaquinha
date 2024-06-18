import {Request, Response} from "express"
import vaquinhaService from "../service/vaquinha.service"

class vaquinhaController{

    async create (req: Request, res: Response){
        const createdVaquinha = await vaquinhaService.create(req.body)
        res.status(201)
        return res.json(createdVaquinha)
    }

    async findAll(req: Request, res:Response){
        const foundVaquinha = await vaquinhaService.findAll()
        res.status(200)
        return res.json(foundVaquinha)
    }

    async findById(req: Request, res:Response){
        const foundVaquinha = await vaquinhaService.findById(req.params.id)
        res.status(200)
        return res.json(foundVaquinha)
    }

    async update(req: Request, res:Response){
        const foundVaquinha = await vaquinhaService.update(req.params.id, req.body)
        res.status(200)
        return res.json(foundVaquinha)
    }

    async delete(req: Request, res:Response){
        const deleted = await vaquinhaService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new vaquinhaController()
