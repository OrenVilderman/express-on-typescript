import express, { Router, Request, Response } from "express"
import { getByUUID, getByName, post, update, remove } from "../controllers/api"

const apiRouter: Router = express.Router();

apiRouter.get('/:uuid', getByUUID);

apiRouter.get('/', getByName);

apiRouter.post('/', post);

apiRouter.patch('/:uuid', update);

apiRouter.delete('/:uuid', remove);

apiRouter.all('*', (request: Request, response: Response) => {
    console.log(request.url);
    response
        .status(404).send('<h1>Page not found</h1>');
});

export default apiRouter;
