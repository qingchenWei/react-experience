var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json()); //body-parser 解析json格式数据
app.use(
  bodyParser.urlencoded({
    //此项必须在 bodyParser.json 下面,为参数编码
    extended: true,
  })
);
var router = express.Router();

app.get("/", function (req, res) {
  console.log("====================================");
  console.log("服务器已开启,8888端口");
  console.log("====================================");
});

router.use("/user", require("./index"));

app.use("/", router);

app.listen(8888);
