import prismaClient from "../../../prisma/server";

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

class UsuarioServices {
  async excecute({ nome, email, senha }: Usuario) {
    if (!nome || !email || !senha) {
      throw new Error("CAMPOS EM BRANCO");
    }

    const usuario = await prismaClient.usuarios.create({
      data: {
        nome: nome,
        email: email,
        senha: senha,
      },
      select: {
        nome: true,
        email: true,
        senha: true,
      },
    });

    return { Dados: usuario };
  }
}

export { UsuarioServices };
