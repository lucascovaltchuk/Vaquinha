import { Schema, model} from "mongoose"

const vaquinhaSchema = new Schema({
    titulo: String,
    descricao: String,
    imagem: String,
    meta: Number

})

export default model("Vaquinha", vaquinhaSchema)