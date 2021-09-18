import express, { Application, Request, Response } from "express"
import apiRouter from "./routes/api"

const PORT: number = Number(process.env.PORT) || 5000;
const server: Application = express()

server.use(express.json());
server.use(express.static("./public"));
server.use('/api/V0.1', apiRouter)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

server.all('*', (request: Request, response: Response) => {
    console.log(request.url);
    response
        .status(404).send('<h1>Page not found</h1>');
});
