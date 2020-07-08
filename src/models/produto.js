const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const Produto = sequelize.define("produto", {
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

sku:{
  allowNull:false,
  type: Sequelize.STRING(100),
  validate: {
    len: [3, 100]
    }
},

descricao:{
  allowNull: false,
  type: Sequelize.STRING(255)
},

preco:{
  allowNull:false,
  type: Sequelize.DOUBLE(),
    validate: {
        len: [1, 999999]
    }
},

quantidade:{
  allowNull:false,
  type: Sequelize.DOUBLE(),
    validate: {
        len: [1, 999999]
    }
}});

module.exports = Produto;