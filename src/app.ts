import express, { Application, Request, Response, NextFunction } from "express"
import testsRouter from "./routes/tests"

const server: Application = express();
const PORT: number = Number(process.env.PORT) || 8000;

server.use(express.json());

server.use('/tests', testsRouter)

server.get('/', (req: Request, res: Response) => {
    res.status(404).send()
});

server.post('/', (req: Request, res: Response) => {
    res.status(404).send()
});

server.put('/', (req: Request, res: Response) => {
    res.status(404).send()
});

server.patch('/', (req: Request, res: Response) => {
    res.status(404).send()
});

server.delete('/', (req: Request, res: Response) => {
    res.status(404).send()
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
