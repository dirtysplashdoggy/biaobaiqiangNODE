var dbConfig = require('../utils/dbconfig')
getexchange=(req,res)=>{
    var sql = 'select * from exchange'
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

}

module.exports={
    getexchange
}