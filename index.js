const Hapi = require("hapi");
const Inert = require("inert");
const logger = require("pino")();
const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 5000,
  routes: {
    cors: true
  }
});

server.register(Inert, () => {
  server.route({
    method: "GET",
    path: "/evotor/static/css/{param*}",
    handler: {
      directory: {
        path: "./build/static/css/",
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.route({
    method: "GET",
    path: "/evotor/static/js/{param*}",
    handler: {
      directory: {
        path: "./build/static/js/",
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.route({
    method: "GET",
    path: "/evotor/static/media/{param*}",
    handler: {
      directory: {
        path: "./build/static/media/",
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.route({
    method: "GET",
    path: "/evotor/font/{param*}",
    handler: {
      directory: {
        path: "./build/static/font/",
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.route({
    method: "GET",
    path: "/evotor/{path*}",
    handler: {
      file: "./build/index.html"
    }
  });

  server.route({
    method: "GET",
    path: "/{path*}",
    handler: {
      file: "./build/index.html"
    }
  });

  server.start(err => {
    if (err) {
      throw err;
    }
    logger.info("Server running at:", server.info.uri);
  });
});

// server.route({
//   method: "GET",
//   path: "/static/css/{param*}",
//   handler: {
//     directory: {
//       path: "./build/static/css/",
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });

// server.route({
//   method: "GET",
//   path: "/static/js/{param*}",
//   handler: {
//     directory: {
//       path: "./build/static/js/",
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });

// server.route({
//   method: "GET",
//   path: "/static/media/{param*}",
//   handler: {
//     directory: {
//       path: "./build/static/media/",
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });

// server.route({
//   method: "GET",
//   path: "/font/{param*}",
//   handler: {
//     directory: {
//       path: "./build/static/font/",
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });

// // support style
// server.route({
//   method: "GET",
//   path: "/support/static/css/{param*}",
//   handler: {
//     directory: {
//       path: "./build/static/css/",
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });

// server.route({
//   method: "GET",
//   path: "/support/static/js/{param*}",
//   handler: {
//     directory: {
//       path: "./build/static/js/",
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });

// server.route({
//   method: "GET",
//   path: "/support/static/media/{param*}",
//   handler: {
//     directory: {
//       path: "./build/static/media/",
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });

// server.route({
//   method: "GET",
//   path: "/support/font/{param*}",
//   handler: {
//     directory: {
//       path: "./build/static/font/",
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });

// server.route({
//   method: "GET",
//   path: "/support/{path*}",
//   handler: {
//     file: "./build/index.html"
//   }
// });

// evotor style
