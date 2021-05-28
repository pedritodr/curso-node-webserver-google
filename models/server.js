const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.usersPath = '/api/users';

        this.connectionDb();

        //middlewares
        this.middlewares();
        //rutas app
        this.routers()
    }
    async connectionDb() {
        await dbConnection();
    }

    routers() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usersPath, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ' + this.port);
        });
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }
}

module.exports = Server;