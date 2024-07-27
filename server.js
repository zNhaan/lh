var Promise = require("bluebird");
var randomNumber = require("random-number-csprng");
var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Xử lý URL
  var param = req.url.replace("/", "");
  if (param === "") {
    param = "1"; // Sử dụng giá trị mặc định nếu URL không có tham số
  }

  Promise.try(function() {
    return randomNumber(1, 80, parseInt(param));
  }).then(function(randomNum) {
    res.write(randomNum.toString());
    res.end(); // Gửi phản hồi đầy đủ
  }).catch(function(err) {
    res.write("Error: " + err.message);
    res.end();
  });
}).listen(3000);