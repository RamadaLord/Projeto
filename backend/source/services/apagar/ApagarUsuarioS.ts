import prismaClient from "../../../prisma/server";

interface ApagarUsuario {
  id: string;
}

class ApagarUsuarioS {
  async execute({ id }: ApagarUsuario) {
    await prismaClient.usuarios.delete({
      where: {
        id: id
      },
    });
    return { dados: "Deletado com sucesso" };
  }
}

export { ApagarUsuarioS };
