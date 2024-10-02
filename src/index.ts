import mainRouter from "./http/routes/index";
import HttpServer from "./http/server";
try {
    const server = new HttpServer();

    server.configure(mainRouter);
    server.start(Number(process.env.PORT) || 4000);
} catch (error) {
    console.log('Error starting server:', error);
}