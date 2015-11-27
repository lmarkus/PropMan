/* eslint no-console:0 */
import app from './index';
import http from'http';

/*
 * Create and start HTTP server.
 */

const server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log(`Server listening on http://localhost:${this.address().port}`);
});
