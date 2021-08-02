import express from 'express';
import productos from '../routes/productos.js'

export default class Server {
    constructor(){
        this.app = express()
        this.port = 8080

        this.middlewares()

        this.routes()
    }

    middlewares() {
        this.app.use( express.static('public') )
        
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    }

    routes(){
        this.app.use('/api',productos)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

