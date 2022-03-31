const moment = require('moment');

const logger = (req, res, next) =>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    // console.log(util.inspect(`${req}`, false, null, true /* enable colors */));
    console.log(req.host);
    next();
};

module.exports = logger;