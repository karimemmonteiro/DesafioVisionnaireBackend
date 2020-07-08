const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const Pedido = sequelize.define("pedido", {
id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
},

cliente: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
        len: [3, 100]
    }
},

totalDaCompra: {
    allowNull: false,
    type: Sequelize.DOUBLE(),
    validate: {
        len: [1, 999999]
    }
},

dataDaCompra: {
    allowNull: false,
    type: Sequelize.DATE()
},

produtos: {
    allowNull: false,
    type: Sequelize.STRING(1000),
    validate: {
        len: [3, 1000]
    }
    
}});

module.exports = Pedido;