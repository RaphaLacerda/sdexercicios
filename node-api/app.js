const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/colaboradores');
const logger = require('./config/logger');

const app = express();

app.use(cors());

app.use(express.json());

// app.use((req, res, next) => {
//     if (!req.headers.auth || req.headers.auth !== '123') {
//         res.sendStatus(401);
//     } else {
//         next();
//     }
// });
app.use('/', routes);

const port = process.env.PORT_API || 3001;

function initApp(){
    try {
        app.listen(port, () => logger.info('App listening to port ' + port));
    } catch (error) {
        logger.error('initApp error: ', error);
        process.exit(1);
    }
}

initApp();