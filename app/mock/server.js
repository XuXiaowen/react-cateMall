let express = require('express');
let app = new express();
app.listen(3000);

let ad = require('./home/ad');
console.log(ad);
//广告的接口
app.get('/api/ad', (req, res) => {
  res.send(ad);
});

// api(url,{
//  Accept:"appliacation/json"
// }).then(res=>res.json).then(data=>{
//  console.log(data)
// )}

let list = require('./home/list');
//获取列表 需要传递城市 、页码
app.get('/api/list/:city/:page', (req, res) => {
  console.log(req.params.city);
  console.log(req.params.page);
  res.send(list);
});