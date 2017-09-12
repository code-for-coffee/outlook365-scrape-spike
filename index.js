var server = require('./server');
var router = require('./router');

var handle = {};
handle['/'] = home;

server.start(router.route, handle);

function home(response, request) {
  console.log('Request handler \'home\' was called.');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<p>Please <a href=\'#\'>sign in</a> with your Office 365 or Outlook.com account.</p>');
  response.end();
}