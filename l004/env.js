var flatiron     = require('flatiron')
  , ecstatic     = require('ecstatic')
  , environment  = exports
  , app          = flatiron.app
  ;

environment.initialize = function initialize(callback) {
  app.use(flatiron.plugins.http, 
    { "before" : [ ecstatic(__dirname + '/public') ] });

  app.get       = app.router.get;
  app.put       = app.router.put;
  app.post      = app.router.post;
  app["delete"] = app.router["delete"];

  callback(app);
};

environment.start = function start(app, cb) {
  app.start(3001, function () {
    console.log({"anadoessockets": "2012", "port": 3001});
    if(cb) { cb(); }
  });
};
