import { Response, Request } from "express";
import { ListarProdutosS } from "../../services/Listar/ListarProdutosS";

class ListarProdutosC{
    async handle(req:Request, res: Response){
        const listarProdutosS = new ListarProdutosS()
        const produtos = await listarProdutosS.execute()

        return res.json(produtos)
    }
}

export { ListarProdutosC }