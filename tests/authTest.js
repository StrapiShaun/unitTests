/*write the test here*/


const request = require('supertest');
const { superAdmin } = require('./helpers/strapiAuth')
//const  { getAuthenticatedUser, createUserWithAuthenticatedRole } = require("./helpers/strapiAuth");

it("Should login user and return jwt token", async () => {
    //const { user } = await getAuthenticatedUser(); // this is will be covered in point 3. 
    await request(strapi.server.httpServer) // app server is an instance of Class: http.Server
      .post("/api/auth/local")
      .set("accept", "application/json")
      .set("Content-Type", "application/json")
      .send({
        identifier: superAdminCredentials.email, //need to fix the way the user id and pw are passed over
        password: superAdminCredentials.password,
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then(data => {
        expect(data.body.jwt).toBeDefined();
      });
  });

  