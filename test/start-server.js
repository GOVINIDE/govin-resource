const GovinResourceServer = require('../index');
const clc = require('cli-color');

const resourceServer = new GovinResourceServer();

// Start server
resourceServer.listen();

resourceServer.on('error', err => {
    console.error(clc.red(`ERR!: Resource server error: ${err}`));
});
