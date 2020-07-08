const Cliente = require('../models/cliente');
const status = require('http-status');

exports.Insert = (req, res, next) => {
const nome = req.body.nome;
const cpf= req.body.cpf;
const dataNascimento = req.body.dataNascimento; 


Cliente.create({
    nome: nome,
    cpf: cpf,
    dataNascimento: dataNascimento,        
})
    
    .then(cliente => {
        if (cliente) {
            res.status(status.OK).send(cliente);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    
    .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
Cliente.findAll()
    .then(cliente => {
        if (cliente) {
            res.status(status.OK).send(cliente);
        }
    })
    .catch(error => next(error));
}



exports.SearchOne = (req, res, next) => {
const id = req.params.id;

Cliente.findByPk(id)
    .then(cliente => {
        if (cliente) {
            res.status(status.OK).send(cliente);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};



exports.Update = (req, res, next) => {

const id = req.params.id;
const nome = req.body.nome;
const cpf = req.body.cpf;
const dataNascimento = req.body.dataNascimento;    

Cliente.findByPk(id)
    .then(cliente => {
        if (cliente) {
            cliente.update({
                nome: nome,
                cpf: cpf,
                dataNascimento: dataNascimento,                    
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

Cliente.findByPk(id)
    .then(cliente => {
        if (cliente) {
            cliente.destroy({
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
