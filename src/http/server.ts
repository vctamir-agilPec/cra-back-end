import cors from 'cors';
import express from 'express';

class HttpServer {
    private app: express.Application;
    constructor() {
        this.app = express();
    }

    configure(routes: express.Router) {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use((req, res, next) => {
            res.header('Agilpec', 'v1');
            next();
        });
        this.app.use('/api', routes);
    }

    start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}

export default HttpServer;