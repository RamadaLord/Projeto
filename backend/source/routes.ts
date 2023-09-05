import { Router } from "express";

import { UsuarioController } from "./controllers/users/UsuariosController";
import { ListarUsuariosController } from "./controllers/Listar/ListarUsuarioController";
import { ClientesController } from "./controllers/clients/ClientsControllers";
import { ListarClientesController } from "./controllers/Listar/ListarClientescontroller";
import { ProdutosController } from "./controllers/Produtos/ProdutosControler";
import { ListarProdutosC } from "./controllers/Listar/ListarProdutosC";
import { ApagarUsuarioC } from "./controllers/apagar/ApagarUsuarioC";

export const router = Router();

//Usuarios
router.post("/CriarUsuario", new UsuarioController().handle);
router.get("/ListarUsuario", new ListarUsuariosController().handle);
router.delete("/ApagarUsuario", new ApagarUsuarioC().handle)
//Clientes
router.post("/CriarCliente", new ClientesController().handle)
router.get("/ListarCliente", new ListarClientesController().handle)
//Produtos
router.post('/CriarProduto', new ProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosC().handle)