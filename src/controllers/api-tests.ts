
import { Request, Response, NextFunction } from "express"
import { v4 as uuid } from "uuid"
import tests from '../db/tests.json'
import fs from 'fs'

const PORT: number = Number(process.env.PORT) || 8000;

export const getTestByUUID = (req: Request, res: Response) => {
    const { id } = req.params
    res.send(tests.find((test) => test.UUID == id));
}

export const getSuiteName = (req: Request, res: Response, next: NextFunction) => {
    console.log(tests)
    res.send(tests);

    console.log(req.params)
    console.log(req.query)
    //res.send('Hello tests!');
    if (req.params.name) {
        console.log(req.params.name);
    } else if (true) {
        console.log(true);
    } else {
    }
    // let a = process.env;
    // console.log(process.env)
    //res.send('Hello world!')
}

export const postTest = (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    tests.push({ ...user, UUID: uuid() })
    res.send(tests);
    if (req.params.name) {
        console.log(req.params.name);
    } else if (true) {
        console.log(true);
    } else {
    }
    // let a = process.env;
    // console.log(process.env)
    //res.send('Hello world!')
}

export const updateTest = (req: Request, res: Response) => {
    const { uuid } = req.params;
    const { name, description, suite } = req.body;
    const testToUpdate = tests.find((test) => test.UUID == uuid)
    if (typeof testToUpdate === 'object' && testToUpdate != null) {
        if (name) {
            testToUpdate.name = name;
        }
        if (description) {
            testToUpdate.description = description;
        }
        if (suite) {
            testToUpdate.suite = suite;
        }
        res.send(tests.filter((test) => test.UUID == uuid));
    } else {
        res.status(404).send(`Test with UUID of: ${uuid}, not found!`);
    }
}

export const deleteTest = (req: Request, res: Response) => {
    const { uuid } = req.params
    const testToRemove = tests.filter((test) => test.UUID == uuid)
    if (Array.isArray(testToRemove) && testToRemove.length > 0) {
        //tests = tests.filter((test) => test.UUID != uuid);
        fs.writeFile("dist/db/tests.json", JSON.stringify(tests.filter((test) => test.UUID != uuid)), function (err) {
            if (err) throw err;
            console.log('complete');
        }
        );

        res.send(`Test with UUID of: ${uuid}, removed!`)
    } else {
        res.status(404).send(`Test with UUID of: ${uuid}, not found!`)
    }
};

export const resetDB = (req: Request, res: Response) => {
    res.status(201).send("Server Restarting...");
    fs.writeFile("dist/db/tests.json", fs.readFileSync('dist/db/tests_backup.json').toString(), function (err) {
        if (err) throw err;
        console.log('complete');
    });
}