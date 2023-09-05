import { Request, Response } from "express";
import { CriarClienteServices } from "../../services/clients/ClientServices";

class ClientesController {
  async handle(req: Request, res: Response) {
    const {
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
    } = req.body

    const clientesServices = new CriarClienteServices()
    const clients = await clientesServices.execute({
        nome,
cpf_cnpj,
rg_ie,
cell,
fixo,
rua,
complemento,
bairro,
cidade,
estado
    })
    return res.json(clients)

  }
}

export { ClientesController }