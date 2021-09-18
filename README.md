# Express On TypeScript - Created by Oren Vilderman  
as infrastructure for similar project
* Express, TypeScript, Mocha, Mochawesome


---

## Note
This project changed and the Mocha and testsDB removed at this stage,  
Things look cleaner now and are usable - Debugging this project now is as easy as it can be :]

---

## Usage Example

This is how you simply run the server with the supported UI and API routs,  
You can use it from Postman or from the UI at `http://localhost:5000/`

```
import express, { Application } from "express"
import server from "express-on-typescript"

const app: Application = express();

app.use(server);
```

---


## Installation
Run `npm install express-on-typescript` to add install this project.
