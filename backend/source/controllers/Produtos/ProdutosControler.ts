import { Request, Response } from "express";
import { ProdutosServices } from "../../services/Produtos/ProdutosServices";

class ProdutosController{
    async handle(req:Request, res:Response){
        const{nome, fabricante, quantidade, preco}= req.body
        const produtosServices = new ProdutosServices()
        const produtos = await produtosServices.execute({
            nome, fabricante, quantidade, preco
        })
        return res.json(produtos)
    
    
    }
}

export{ ProdutosController }