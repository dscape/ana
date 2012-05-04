var environment = require('./env')
  , socketio    = require('socket.io')
  , server      = exports
  , io
  ;

server.run = function run(cb) {
  environment.initialize(function initialize(app) {
    io = socketio.listen(app.server);
    io.sockets.on('connection', function(client) {
      client.on('msg', function (shit) {
        io.sockets.broadcast.emit('msg', shit);
      });
    });
    environment.start(app, cb);
  });
};

if(require.main === module) {
  server.run();
}