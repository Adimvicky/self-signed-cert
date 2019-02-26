const fs = require('fs');

let selfSignedCert = {
    key : fs.readFileSync('./key.pem'),
    cert : fs.readFileSync('./cert.pem')
};

module.exports = selfSignedCert;