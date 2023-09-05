import { Request, Response } from "express";
import { ApagarUsuarioS } from "../../services/apagar/ApagarUsuarioS";

class ApagarUsuarioC {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const apagarUsuarioS = new ApagarUsuarioS();
    const apagar = await apagarUsuarioS.execute({ id });
    return res.json(apagar);
  }
}

export { ApagarUsuarioC };
