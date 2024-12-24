const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'DARK-SHADOW=zY8zDKjJ#QUPT59PCYy2n6Z32NhzZF08vi6Fxsgk6pbjzmyOSiZQ' ,
ANTI_DELETE : process.env.ANTI_DELETE || 'true' ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO || '94742601975',      
MAX_SIZE: 500,
AUTO_BIO:  process.env.AUTO_BIO  || 'true',
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false,
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'false',
ANTI_BOT: process.env.ANTI_BOT || 'true'
};
