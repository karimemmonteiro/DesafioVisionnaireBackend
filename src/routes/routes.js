const express = require('express');
const UsuarioController = require ('../controllers/usuarioController.js');
const ClienteController = require ('../controllers/clienteController.js');
const ProdutoController = require ('../controllers/produtoController.js');
const PedidoController = require ('../controllers/pedidoController');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SearchOne);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

router.post('/cliente', ClienteController.Insert);
router.get('/cliente', ClienteController.SearchAll);
router.get('/cliente/:id',ClienteController.SearchOne);
router.put('/cliente/:id', ClienteController.Update);
router.delete('/cliente/:id', ClienteController.Delete);

router.post('/produto', ProdutoController.Insert);
router.get('/produto', ProdutoController.SearchAll);
router.get('/produto/:id',ProdutoController.SearchOne);
router.put('/produto/:id', ProdutoController.Update);
router.delete('/produto/:id', ProdutoController.Delete);

router.post('/pedido', PedidoController.Insert);
router.get('/pedido', PedidoController.SearchAll);
router.get('/pedido/:id',PedidoController.SearchOne);
router.put('/pedido/:id', PedidoController.Update);
router.delete('/pedido/:id', PedidoController.Delete);

module.exports = router;