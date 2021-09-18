
import { Request, Response } from "express"
import { v4 as uuid, validate as uuidValidate } from "uuid"
import * as data from '../db/userDataDB.json'

const dataArr: any[] = data['default' as any] as any;

export const getByUUID = (req: Request, res: Response) => {
    const { uuid } = req.params
    res.send(dataArr.find((data) => data.uuid == uuid));
}

export const getByName = (req: Request, res: Response) => {
    if (req.query.name) {
        res.send(dataArr.filter((data) => data.name == req.query.name));
    } else {
        res.send(dataArr);
    }
}

export const post = (req: Request, res: Response) => {
    const user = req.body;
    dataArr.push({
        ...user,
        uuid: uuidValidate(user.uuid) ? user.uuid : uuid(),
        id: user.id ? user.id : dataArr.length + 1
    });
    res.status(201).send(dataArr);
}

export const update = (req: Request, res: Response) => {
    const { uuid } = req.params;
    const { id, name } = req.body;
    const dataToUpdate = dataArr.find((data) => data.uuid == uuid)
    if (typeof dataToUpdate === 'object' && dataToUpdate != null) {
        if (name) {
            dataToUpdate.name = name;
        }
        if (id) {
            dataToUpdate.id = id;
        }
        res.send(dataArr.filter((data) => data.uuid == uuid));
    } else {
        res.status(404).send(`Data with UUID of: ${uuid}, not found!`);
    }
}
