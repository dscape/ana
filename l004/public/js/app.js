(function () {

 var socket   = io.connect();

  function saySomething () {
    socket.emit('msg', prompt('What you wanna say?'));
  }

  socket.on('msg', function appendSomeLameAssTextSomeoneSend(blurb) {
    $('#panel').append('<p>' + blurb + '</p>');
  });

  $(function() {
    $('body').click(function () { saySomething(); });
  });

})();
