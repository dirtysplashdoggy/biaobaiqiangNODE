var dbConfig = require('../utils/dbconfig')
var express = require('express');
var router = express.Router();

var biaobai = require('../controllers/biaobaiControllers')
var exchange = require('../controllers/exchangeControllers')

/* GET home page. */
router.get('/biaobai', biaobai.getbiaobai)
router.post('/addbiaobai', (req, res) => {
  var time = req.body.time
  var content = req.body.biaobaiContent
  var sql = `insert into biaobai (content,time) values ('${content}','${time}')`
  var sqlArr = []
  var callBack = (err, data) => {
    if (err) {
      console.log('error');
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
})
router.post('/deletebiaobai', (req, res) => {
  console.log(req.body.id);


  var sql = `delete from biaobai where id ='${req.body.id}'`
  var sqlArr = []
  var callBack = (err, data) => {
    if (err) {
      console.log('error');
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
})

router.get('/exchange', exchange.getexchange)

router.post('/addexchange', (req, res) => {
  // console.log(req.body);

  var time = req.body.time
  var content = req.body.exchangeContent
  var cate = req.body.cate
  console.log(content);
  console.log(time);
  console.log(cate);

  var sql = `insert into exchange (content,time,cate) values ('${content}','${time}','${cate}')`
  var sqlArr = []
  var callBack = (err, data) => {
    if (err) {
      console.log('error');
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
})

router.post('/deleteExchange', (req, res) => {
  // console.log(req.body.id);
  var sql = `delete from exchange where id ='${req.body.id}'`
  var sqlArr = []
  var callBack = (err, data) => {
    if (err) {
      console.log('error');
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
})



module.exports = router;
