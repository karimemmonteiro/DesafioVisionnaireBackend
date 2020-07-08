const Pedido = require('../models/pedido');
const status = require('http-status');

exports.Insert = (req, res, next) => {
const cliente = req.body.cliente;
const totalDaCompra = req.body.totalDaCompra;
const dataDaCompra = req.body.dataDaCompra;
const produtos = req.body.produtos;

Pedido.create({
    cliente: cliente,
    totalDaCompra: totalDaCompra,
    dataDaCompra: dataDaCompra,
    produtos: produtos,
})
    
    .then(pedido => {
        if (pedido) {
            res.status(status.OK).send(pedido);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    
    .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
Pedido.findAll()
    .then(pedido => {
        if (pedido) {
            res.status(status.OK).send(pedido);
        }
    })
    .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
const id = req.params.id;

Pedido.findByPk(id)
    .then(pedido => {
        if (pedido) {
            res.status(status.OK).send(pedido);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};

exports.Update = (req, res, next) => {    
const id = req.params.id;
const cliente = req.body.cliente;
const totalDaCompra = req.body.totalDaCompra;
const dataDaCompra = req.body.dataDaCompra;
const produtos = req.body.produtos;

Pedido.findByPk(id)
    .then(pedido => {
        if (pedido) {
            pedido.update({
                cliente: cliente,
                totalDaCompra: totalDaCompra,
                dataDaCompra: dataDaCompra,
                produtos: produtos
            },
                
                {
                    where: { id: id }
                })
                .then(() => {
                    
                    res.status(status.OK).send();
                })
                .catch(error => next(error));
        } else {
            
            res.status(status.NOT_FOUND).send();
        }
    })
    
    .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
const id = req.params.id;

Pedido.findByPk(id)
    .then(pedido => {
        if (pedido) {
            pedido.destroy({
                where: { id: id }
            })
                .then(() => {
                    res.status(status.OK).send();
                })
                .catch(error => next(error));
        }
        else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};
