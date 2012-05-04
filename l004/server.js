var environment = require('./env')
  , socketio    = require('socket.io')
  , server      = exports
  , io
  ;

server.run = function run() {
  environment.initialize(function initialize(app) {
    environment.start(app, function () {
      io = socketio.listen(app.server);
      io.sockets.on('connection', function(client) {
        client.on('msg', function (shit) {
          io.sockets.emit('msg', shit);
        });
      });
    });
  });
};

if(require.main === module) {
  server.run();
}