const Colaborador = require('../model/colaborador');
const logger = require('../config/logger');


const findAll = () => new Promise((resolve, reject) => {
    Colaborador.findAll().then((colaboradores) => {
        logger.debug('colabService:findAll: ', colaboradores);
        resolve(colaboradores);
    }).catch((e) => {
        reject(e);
    });
});

const findOne = id => Colaborador.findOne({
    where: {
        id,
    },
}).then((colaborador) => {
    logger.debug('colabService:findOne: ', colaborador);
    return colaborador;
}).catch((e) => {
    logger.error('colabService:findOne:error: ', e);
    throw e;
});

const deleteOne = id => Colaborador.destroy({
    where: {
        id,
    },
}).then((countRows) => {
    logger.debug('colabService:deleteOne: ', countRows);
    return countRows > 0;
}).catch((e) => {
    logger.debug('colabService:deleteOne:error: ', e);
});

const validateCreate = (colabToInsert) => {
    const errors = [];
    if (!colabToInsert.nome) {
        errors.push('colaborador.nome.is.empty');
    }
    if (!colabToInsert.email) {
        errors.push('colaborador.email.is.empty');
    }
    if (!colabToInsert.celular) {
        errors.push('colaborador.celular.is.empty');
    }
    return errors;
};

const create = (colabRequest = {}) => new Promise((resolve, reject) => {
    const colabToInsert = {
        nome: colabRequest.nome,
        email: colabRequest.email,
        celular: colabRequest.celular,
        foto: colabRequest.foto,
    };
    const errors = validateCreate(colabToInsert);
    if (errors && errors.length) {
        return reject(new Error(errors.join(', ')));
    }
    Colaborador.create(colabToInsert).then((newColaborador) => {
        resolve({ id: newColaborador.id });
    }).catch((e) => {
        reject(e);
    });
    return undefined;
});

const buildUpdateObject = (colabRequest) => {
    const colabToUpdate = {};
    if (colabRequest.nome) {
        colabToUpdate.nome = colabRequest.nome;
    }
    if (colabRequest.email) {
        colabToUpdate.email = colabRequest.email;
    }
    if (colabRequest.celular) {
        colabToUpdate.celular = colabRequest.celular;
    }
    if (colabRequest.foto) {
        colabToUpdate.foto = colabRequest.foto;
    }
    return colabToUpdate;
}

const updateOne = (id, colabRequest) => new Promise((resolve, reject) => {
    if (!id) {
        return reject(new Error('id.empty'));
    }
    const colabToUpdate = buildUpdateObject(colabRequest);
    return Colaborador.update(colabToUpdate, {
        where: {
            id,
        },
    }).then(() => {
        logger.debug('colabService:updateOne:ok');
        resolve();
    }).catch((e) => {
        reject(e);
    });
});

module.exports.findAll = findAll;
module.exports.findOne = findOne;
module.exports.create = create;
module.exports.deleteOne = deleteOne;
module.exports.updateOne = updateOne;