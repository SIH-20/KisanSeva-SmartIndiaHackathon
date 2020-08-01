var http = require('http');
var urlencode = require('urlencode');

module.exports.sendSms=function(message,receiver,email){
  var msg = urlencode(`${message}`);
  var toNumber = `${receiver}`;
  var username = `${email}`;
  var hash = '509dacb3543eabb04793006eea49b550ee93acc5050c3f5e62b44b6533da2baf'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
  var sender = 'txtlcl';
  var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + msg;
  var options = {
    host: 'api.textlocal.in', path: '/send?' + data
  };
  callback = function (response) {
    var str = '';//another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });//the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      console.log(str);
    });
  }//console.log('hello js'))
  http.request(options, callback).end();
}
