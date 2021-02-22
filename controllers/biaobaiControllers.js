var dbConfig = require('../utils/dbconfig')
getbiaobai=(req,res)=>{
    var sql = 'select * from biaobai'
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
    getbiaobai,
 
}