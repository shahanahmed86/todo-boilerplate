const app = require('./app');
const server = require('http').createServer(app);

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`server is running on port ${port}`));
