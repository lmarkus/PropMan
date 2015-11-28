/* eslint no-console:0 */
'use strict';
const app = require('./index'),
    http = require('http');
let server;
/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log(`Server listening on http://localhost:${this.address().port}`);
});
