const fs = require('fs');

try {

    let selfSignedCert = {
        key : fs.readFileSync('./node_modules/self-signed-cert/key.pem'),
        cert : fs.readFileSync('./node_modules/self-signed-cert/cert.pem')
    };

    module.exports = selfSignedCert;

}catch(e){
    console.log(`\x1b[101m`+`self-signed-cert error : self-signed cert not found`+`\x1b[0m`);
}


