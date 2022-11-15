
const request = require('supertest');

//const { setupStrapi, teardownStrapi } = require("./helpers/strapi");

it("should return hello world", async () => {
  await request(strapi.server.httpServer)
    .get("/api/public")
    .expect(200) // Expect response http code 200
    .then((data) => {
      expect(data.text).toBe("Hello World!"); // expect the response text
    
    });
  });
    