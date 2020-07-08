const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const Cliente = sequelize.define("cliente", {
id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
},

nome: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
        len: [3, 100]
    }
},

cpf: {
    allowNull: false,
    type: Sequelize.DOUBLE(),
    validate: {
        len: [1, 11]
    }
},

dataNascimento: {
    allowNull: false,
    type: Sequelize.DATE()
}
});

module.exports = Cliente;