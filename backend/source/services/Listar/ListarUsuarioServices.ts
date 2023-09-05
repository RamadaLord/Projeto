import prismaClient from "../../../prisma/server";

class ListarUsuariosServices{
    async excecute(){
        const listarUser = await prismaClient.usuarios.findMany({})

        return(listarUser)

    }
}

export { ListarUsuariosServices }