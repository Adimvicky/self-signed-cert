# self-signed-cert

**A utility module for getting a self-signed ssl certificate for development of secure servers**

### API 

```javascript

const https = require('https')
const { key, cert } = require('self-signed-cert');

let serverOptions = {
    key,
    cert
}

const server = https.createServer(serverOptions,(req,res) => {
    // Your awesome secure server logic 
});

server.listen(8080,() => {
    console.log('Your awesome server is listening on localhost:8080')
});

```