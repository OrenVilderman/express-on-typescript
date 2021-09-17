import express, { Router } from "express"
import { getByUUID, getByName, post, update } from "../controllers/api"

const apiRouter: Router = express.Router();

apiRouter.get('/:uuid', getByUUID);

apiRouter.get('/', getByName);

apiRouter.post('/', post);

apiRouter.patch('/:uuid', update);

export default apiRouter;
