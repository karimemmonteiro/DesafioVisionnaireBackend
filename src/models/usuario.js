const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const Usuario = sequelize.define("usuario", {
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

senha: {
    allowNull: false,
    type: Sequelize.STRING(),
    validate: {
        len: [1, 50]
    }
},

dataNascimento: {
    allowNull: false,
    type: Sequelize.DATE()
},

ativo: {
    allowNull: false,
    type: Sequelize.BOOLEAN(),
    defaultValue: true
}});

module.exports = Usuario;