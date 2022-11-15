'use strict';

const { createUtils } =require('./utils');

const superAdminCredentials = {
    email: 'admin@strapi.io',
    firstname: 'admin',
    lastname: 'admin',
    password: 'Password123',
  };

const superAdminLoginInfo = _.pick(superAdminCredentials, ['email', 'password']);
