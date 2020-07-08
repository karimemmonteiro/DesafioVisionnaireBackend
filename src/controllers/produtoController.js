const Produto = require('../models/produto.js');
const status = require('http-status');

exports.Insert = (req, res, next) => {
const nome = req.body.nome;
const sku = req.body.sku;
const descricao = req.body.descricao;
const preco = req.body.preco;
const quantidade = req.body.quantidade;

Produto.create({
    nome: nome,
    sku: sku,
    descricao: descricao,
    preco: preco,
    quantidade: quantidade,
})
    
    .then(produto=> {
        if (produto) {
            res.status(status.OK).send(produto);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    
    .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
Produto.findAll()
    .then(produto=> {
        if (produto) {
            res.status(status.OK).send(produto);
        }
    })
    .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
const id = req.params.id;

Produto.findByPk(id)
    .then(produto=> {
        if (produto) {
            res.status(status.OK).send(produto);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};


exports.Update = (req, res, next) => {    
const id = req.params.id;
const nome = req.body.nome;
const sku = req.body.sku;
const descricao = req.body.descriacao;
const preco = req.body.preco;
const quantidade = req.body.quantidade;

Produto.findByPk(id)
    .then(produto => {
        if (produto) {
            produto.update({
                nome: nome,
                sku: sku,
                descricao: descricao,
                preco: preco,
                quantidade:quantidade
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

Produto.findByPk(id)
    .then(produto => {
        if (produto) {
            produto.destroy({
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
