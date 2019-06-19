const express = require('express');
const logger = require('../config/logger');

const router = express.Router();
const {
    findAll, create, findOne, deleteOne, updateOne,
} = require('../services/colabService')


router.get('/', (req, res) => {
    findAll().then((colaboradores) => {
        res.send(colaboradores);
    }).catch((e) => {
        logger.error('colaboradores-routes: ', e);
        res.sendStatus(500);
    });
});

router.get('/:id', (res, req) => {
    findOne(req.params.id).then((colaboradores) => {
        if (!colaboradores){
            res.sendStatus(404);
        } else {
            res.send(colaboradores);
        }
    }).catch((e) => {
        logger.error('colaboradores-routes: ', e)
        res.sendStatus('500').send({
            error: e.message,
        });
    });
});

router.delete('/:id', (req, res) => {
    deleteOne(req.params.id).then(() => {
        res.sendStatus(200);
    }).catch((e) => {
        logger.error('colaboradores-routes: ',e);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    create(req.body).then((colaborador) => {
        res.send(colaborador)
    }).catch((e) => {
        logger.error('colaboradores-routes: ',e);
        res.sendStatus(500).send({
            error: e.message,
        });
    });
});

router.put('/:id', (req, res) => {
    updateOne(req.params.id, req.body).then(() => {
        res.sendStatus(200);
    }).catch((e) => {
        logger.error('colaboradores-routes: ', e);
        res.status(500).send({
            error: e.message,
        });
    });
});

module.exports = router;