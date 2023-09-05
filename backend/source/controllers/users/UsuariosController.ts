import { Request, Response } from "express"
import { UsuarioServices } from "../../services/users/UsuariosSevices"

class UsuarioController{

    async handle(req:Request , res:Response ){

        const { nome, email, senha } = req.body
        const usuarioServices = new UsuarioServices()
        const usuarios = await usuarioServices.excecute({
            nome,
            email,
            senha
        })

        return res.json(usuarios)

    }

}

export { UsuarioController }