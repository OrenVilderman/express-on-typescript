
import { Request, Response } from "express"
import { v4 as uuid } from "uuid"

let dataArr: any[] = []
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
    dataArr.push({ ...user, UUID: uuid() });
    res.send(dataArr);
}

export const update = (req: Request, res: Response) => {
    const { uuid } = req.params;
    const { id, name } = req.body;
    const dataToUpdate = dataArr.find((data) => data.UUID == uuid)
    if (typeof dataToUpdate === 'object' && dataToUpdate != null) {
        if (name) {
            dataToUpdate.name = name;
        }
        if (id) {
            dataToUpdate.id = id;
        }
        res.send(dataArr.filter((data) => data.UUID == uuid));
    } else {
        res.status(404).send(`Data with UUID of: ${uuid}, not found!`);
    }
}
