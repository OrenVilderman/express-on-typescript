import express, { Router, Request, Response, NextFunction } from "express"
import { getTestByUUID, getSuiteName, postTest, updateTest, deleteTest, resetDB } from "../controllers/api-tests"
import { testone } from "../tests/sanity"

const apiTestsRouter: Router = express.Router();
const PORT: number = Number(process.env.PORT) || 8000;

var myvar = '<html>' +
    '<head>' +
    '    <title>test</title>' +
    '</head>' +
    '' +
    '<body>' +
    '    <form id="formElem">' +
    '        <input type="text" name="firstname" value="Karam">' +
    '        <input type="text" name="lastname" value="Yousef">' +
    '        <input type="submit">' +
    '    </form>' +
    '    <div id="decoded"></div>' +
    '    <button id="encode">Encode</button>' +
    '    <div id="encoded"></div>' +
    '</body>' +
    '<script>' +
    '    encode.onclick = async (e) => {' +
    '        let response = await fetch(\'http://localhost:8000/tests/encode\', {' +
    '                method: \'GET\',' +
    '                headers: {' +
    '                    \'Content-Type\': \'application/json\',' +
    '                },' +
    '        })' +
    '' +
    '        let text = await response.text(); // read response body as text' +
    '        data = JSON.parse(text);' +
    '        document.querySelector("#encoded").innerHTML = text;' +
    '      //  document.querySelector("#encoded").innerHTML = `First name = ${data.firstname} <br/> ' +
    '      //                                                  Last name = ${data.lastname} <br/>' +
    '      //                                                  Age    = ${data.age}`' +
    '    };' +
    '' +
    '    formElem.onsubmit = async (e) => {' +
    '      e.preventDefault();' +
    '      var form = document.querySelector("#formElem");' +
    '     // var form = document.forms[0];' +
    '' +
    '        data = {' +
    '          firstname : form.querySelector(\'input[name="firstname"]\').value,' +
    '          lastname : form.querySelector(\'input[name="lastname"]\').value,' +
    '          age : 5' +
    '        }' +
    '' +
    '        let response = await fetch(\'http://localhost:8000/tests/decode\', {' +
    '                method: \'POST\', // or \'PUT\'' +
    '                headers: {' +
    '                    \'Content-Type\': \'application/json\',' +
    '                },' +
    '                body: JSON.stringify(data),' +
    '        })' +
    '' +
    '        let text = await response.text(); // read response body as text' +
    '        document.querySelector("#decoded").innerHTML = text;' +
    '    };' +
    '</script>' +
    '</html>';

apiTestsRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(myvar);
    res.sendFile('../pages/tests.html', { root: __dirname });
});

apiTestsRouter.get('/:testone', async (req: Request, res: Response, next: NextFunction) => {
    const response = await testone();
    res.send(response);
});

apiTestsRouter.get('/:id', getTestByUUID);

apiTestsRouter.get('/:suite?/:name?', getSuiteName);

apiTestsRouter.post('/', postTest);

apiTestsRouter.post('/reset', resetDB);

apiTestsRouter.patch('/:uuid', updateTest);

apiTestsRouter.delete('/:uuid', deleteTest);

export default apiTestsRouter;