const Hapi = require('hapi');
const Inert = require('inert');
const logger = require('pino')();

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 5000,
  routes: {
    cors: true,
  },
});

server.register(Inert, () => {});

server.route({
  method: 'GET',
  path: '/static/css/{param*}',
  handler: {
    directory: {
      path: './build/client/static/css/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/static/js/{param*}',
  handler: {
    directory: {
      path: './build/client/static/js/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/static/media/{param*}',
  handler: {
    directory: {
      path: './build/client/static/media/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/font/{param*}',
  handler: {
    directory: {
      path: './build/client/static/font/',
      redirectToSlash: true,
      index: true,
    },
  },
});


// support style
server.route({
  method: 'GET',
  path: '/support/static/css/{param*}',
  handler: {
    directory: {
      path: './build/support/static/css/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/support/static/js/{param*}',
  handler: {
    directory: {
      path: './build/support/static/js/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/support/static/media/{param*}',
  handler: {
    directory: {
      path: './build/support/static/media/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/support/font/{param*}',
  handler: {
    directory: {
      path: './build/support/static/font/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/support/{path*}',
  handler: {
    file: './build/support/index.html',
  },
});

// evotor style
server.route({
  method: 'GET',
  path: '/evotor/static/css/{param*}',
  handler: {
    directory: {
      path: './build/evotor/static/css/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/evotor/static/js/{param*}',
  handler: {
    directory: {
      path: './build/evotor/static/js/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/evotor/static/media/{param*}',
  handler: {
    directory: {
      path: './build/evotor/static/media/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/evotor/font/{param*}',
  handler: {
    directory: {
      path: './build/evotor/static/font/',
      redirectToSlash: true,
      index: true,
    },
  },
});

server.route({
  method: 'GET',
  path: '/evotor/{path*}',
  handler: {
    file: './build/evotor/index.html',
  },
});

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    file: './build/client/index.html',
  },
});


server.start((err) => {
  if (err) {
    throw err;
  }
  logger.info('Server running at:', server.info.uri);
});
