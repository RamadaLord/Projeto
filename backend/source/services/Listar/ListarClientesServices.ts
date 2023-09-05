import prismaClient from "../../../prisma/server";

class ListarClientesS{
    async execute(){
        const clients = await prismaClient.clientes.findMany({})
        return(clients)
    }
}

export { ListarClientesS }