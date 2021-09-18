import tester from '../tester';

// import Mocha ,{ describe, it }from 'mocha';
// // import Mocha, { describe, it } from 'mocha';
// //  import chai, { expect } from 'chai';
// // import promised from 'chai-as-promised';

// // const { describe, it } = require('mocha');

// const { expect } = require('chai');

// const mochawesome = require('mochawesome');

// // chai.use(promised);

// // const { expect } = require("chai");
// // const {describe, it} = require("mocha")

// // var mocha = new Mocha({
// //     reporter: 'mochawesome',
// // });

let testName = 'oren';
let testEnvironment = 'tesetinggg';
const { describe, expect, it, run} = tester(
    testName,
    testEnvironment,
);

export function testone() {
    //   const { describe, expect, it, run, } = mocha
    describe("Main Suites", () => {
        describe("TOP", () => {
            it("One", async () => {
                expect(true).to.be.true;
            });
            it("Two", async () => {
                expect(true).to.be.true;
            });
        });
        describe("BOTTOM", () => {
            it("Three", async () => {
                expect(true).to.be.true;
            });
            it("Four", async () => {
                expect(true).to.be.true;
            });
        });
        it("Zero", async () => {
            expect(true).to.be.true;
        });
    });
    return run();
}