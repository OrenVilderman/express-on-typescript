import Mocha, { Suite } from 'mocha';
import chai, { expect } from 'chai';
import promised from 'chai-as-promised';
// import Mochawesome from 'mochawesome';

const Mochawesome = require('mochawesome');

chai.use(promised);

export default function Tester(testName?: string, environment?: string) {
    const testObject = {};
    const mochaDir = `./mochawesome-report/${testName ? testName : 'Mocha'}-${environment ? environment : 'Default'
        }-Tests-Results`;
    const fileName = 'report';
    const mocha = new Mocha({
        //reporter: Mochawesome,
        reporterOptions: {
            reportDir: mochaDir,
            reportFilename: fileName,
            html: true,
            consoleReporter: 'none',
        },
        timeout: 1200000,
    });
    const root = mocha.suite;
    let context: Suite | undefined = root;

    return {
        describe: (name: string, fn: () => any) => {
            const suite = new Mocha.Suite(name);
            context?.addSuite(suite);
            context = suite;
            fn();
            context = suite.parent;
        },

        it: (name: string, fn: () => {}) => {
            context?.addTest(new Mocha.Test(name, fn));
        },

        expect: expect,

        run: () => mocha.run(),
    };
}
