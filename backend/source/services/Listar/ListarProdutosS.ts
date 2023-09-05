import prismaClient from "../../../prisma/server";

class ListarProdutosS{
    async execute(){
        const produtos = await prismaClient.produtos.findMany({})
        return (produtos)
    }
}

export { ListarProdutosS }