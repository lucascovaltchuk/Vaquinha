import vaquinhaModel from "../schema/vaquinha.schema"
import { vaquinhaType } from "../types/comics.types"
import axios from "axios"

class vaquinhaService {

    async create(vaquinha: vaquinhaType){
        const createdVaquinha = await vaquinhaModel.create(vaquinha)
        return createdVaquinha
    }

    async findAll(){
        const foundVaquinha = await vaquinhaModel.find()
        return foundVaquinha
    }

    async findById(id:any){
        const foundVaquinha = await vaquinhaModel.findById(id)
        return foundVaquinha
    }

    async update(id:any, vaquinha:vaquinhaType){
        const updatedVaquinha = await vaquinhaModel.findByIdAndUpdate(id,{
            titulo: vaquinha.titulo,
            descricao: vaquinha.descricao,
            imagem: vaquinha.imagem,
            meta: vaquinha.meta
        }, {new: true})

        return updatedVaquinha
    }

    async delete(id:string){
        try{
            await vaquinhaModel.findByIdAndDelete(id)
            return "Vaquinha removida com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a vaquinha:${error}`)   
        }
    }
    
}
export default new vaquinhaService()