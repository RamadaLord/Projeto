import { Response, Request } from "express";
import { ListarClientesS } from "../../services/Listar/ListarClientesServices";

class ListarClientesController{
    async handle(req: Request, res: Response){
        const listarCServices = new ListarClientesS()
        const clientes = await listarCServices.execute()

        return res.json(clientes)
    }
}

export { ListarClientesController }