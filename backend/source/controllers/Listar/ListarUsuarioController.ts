import  { Request, Response } from 'express'
import { ListarUsuariosServices } from '../../services/Listar/ListarUsuarioServices'

class ListarUsuariosController{
    async handle(req: Request, res: Response){

        const listarUsersServices = new ListarUsuariosServices()
        const listarUser = await listarUsersServices.excecute()

        return res.json(listarUser)

    }

}

export { ListarUsuariosController }