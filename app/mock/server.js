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
