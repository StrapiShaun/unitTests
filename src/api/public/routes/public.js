module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public',
      handler: 'public.hello',
      config: {
        auth: false,
      
      },
    },
  ],
};

