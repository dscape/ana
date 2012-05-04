(function () {

 var socket   = io.connect();

  function saySomething () {
    socket.emit('msg', prompt('What you wanna say?'));
  }

  socket.on('msg', function appendSomeLameAssTextSomeoneSend(blurb) {
    $('#panel').appendChild('<p>' + blurb + '</p>');
  });

  $('#talk').click(saySomething);

})();
