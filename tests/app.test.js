//path: ./tests/app.test.js

const fs = require('fs');
const { setupStrapi, teardownStrapi } = require("./helpers/strapi");

/* 
Disabled tests:
const sum = require('../sum');
require('./public');
*/

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await teardownStrapi();
});

it("strapi is defined", () => {
  expect(strapi).toBeDefined();
});
 
