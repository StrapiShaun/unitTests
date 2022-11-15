'use strict';
const Strapi = require("@strapi/strapi");
const fs = require("fs");
const port = process.env.NODE_ENV === 'test' ? 3001 : 3000; //this doesn't do anything

const _ = require('lodash');

const { createUtils } = require('./utils');

const superAdminCredentials = {
  email: 'admin@strapi.io',
  firstname: 'admin',
  lastname: 'admin',
  password: 'Password123',
};

const superAdminLoginInfo = _.pick(superAdminCredentials, ['email', 'password']);


const createStrapiInstance = async ({
  
  ensureSuperAdmin = true,
  
} = {}) => {
  const instance = Strapi();
  await instance.load();


  await instance.server.listen();

  const utils = createUtils(instance);

  if (ensureSuperAdmin) {
    await utils.createUserIfNotExists(superAdminCredentials);
  }

  return instance;
};


module.exports = {
  createStrapiInstance,
  superAdmin: {
    loginInfo: superAdminLoginInfo,
    credentials: superAdminCredentials,
  },
};
