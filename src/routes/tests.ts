import express, { Router, Request, Response, NextFunction } from "express"
import { getTestByUUID, getSuiteName, postTest, updateTest, deleteTest, resetDB } from "../controllers/tests"
import path from 'path';

const testsRouter: Router = express.Router();
const PORT: number = Number(process.env.PORT) || 8000;

testsRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../pages', 'tests.html'));
});

testsRouter.get('/:id', getTestByUUID);

testsRouter.get('/:suite?/:name?', getSuiteName);

testsRouter.post('/', postTest);

testsRouter.post('/reset', resetDB);

testsRouter.patch('/:uuid', updateTest);

testsRouter.delete('/:uuid', deleteTest);

export default testsRouter;