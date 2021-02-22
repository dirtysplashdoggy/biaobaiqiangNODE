const mysql = require('mysql')
module.exports={
    config:{
        host:'localhost',
        port:'3306',
        user:'biaobai',
        password:'sc1998sc',
        database:'biaobai'
    },
    sqlConnect(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            
            
            conn.query(sql,sqlArr,callBack)
            conn.release()
        })
    }
}