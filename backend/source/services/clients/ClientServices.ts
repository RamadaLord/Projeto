import prismaClient from "../../../prisma/server";

interface CriacaoDeCLientes {
  nome: string;
  cpf_cnpj: string;
  rg_ie: string;
  cell: string;
  fixo: string;
  rua: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class CriarClienteServices {
  async execute({
    nome,
    cpf_cnpj,
    rg_ie,
    cell,
    fixo,
    rua,
    complemento,
    bairro,
    cidade,
    estado,
  }: CriacaoDeCLientes) {
    if (
      !nome ||
      !cpf_cnpj ||
      !rg_ie ||
      !cell ||
      !rua ||
      !bairro ||
      !cidade ||
      !estado
    ) {
      throw new Error("Campos em branco");
    }

    const documentoCadastrado = await prismaClient.clientes.findFirst({
      where: {
        OR: [
          {
            cpf_cnpj: cpf_cnpj,
          },
          {
            rg_ie: rg_ie,
          },
        ],
      },
    });

    if (documentoCadastrado) {
      throw new Error("CPF/CPJ - RG/IE ja cadastrados");
    }

    const clientes = await prismaClient.clientes.create({
      data: {
        nome: nome,
        cpf_cnpj: cpf_cnpj,
        rg_ie: rg_ie,
        cell: cell,
        fixo: fixo,
        rua: rua,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      },
    });
    return { data: "Dados Salvos" };
  }
}

export { CriarClienteServices };
