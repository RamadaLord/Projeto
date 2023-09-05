import prismaClient from "../../../prisma/server";

interface ProdutosCriar {
  nome: string;
  fabricante: string;
  quantidade: string;
  preco: string;
}

class ProdutosServices {
  async execute({ nome, fabricante, quantidade, preco }: ProdutosCriar) {
    if (!nome || !fabricante || !quantidade || !preco) {
      throw new Error("Campos em branco");
    }
    await prismaClient.produtos.create({
      data: {
        nome: nome,
        fabricante: fabricante,
        quantidade: quantidade,
        preco:preco,
      },
    });
    return { dados: 'Produto cadastrado'}
  }
}

export { ProdutosServices }
