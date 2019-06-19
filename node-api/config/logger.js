const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log'}),
    ],
});

logger.stream = {
    write(message){
        logger.info(message);
    },    
};

module.exports = logger;