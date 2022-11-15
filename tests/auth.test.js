//path: ./tests/app.test.js

const fs = require('fs');
const { createStrapiInstance } = require("./helpers/strapiAuth");

/* 
Disabled tests:
const sum = require('../sum');
require('./public');
*/
require('./authTest');
beforeAll(async () => {
  await createStrapiInstance();
});

// afterAll(async () => {
//   await teardownStrapi();
// });

it("strapi is defined", () => {
  expect(strapi).toBeDefined();
});
 
