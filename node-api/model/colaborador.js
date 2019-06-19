const Sequelize = require('sequelize');
const { connection } = require('../config/database')
const {Model} = Sequelize;

class Colaborador extends Model {}

Colaborador.init({
    id : {
        type: Sequelize.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    nome: {
        type : Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    celular: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    foto: {
        type: Sequelize.STRING,
    },
}, {
    sequelize: connection,
    modelName: 'colaboradores',
    timestamps: false,
  }
)

module.exports = Colaborador;