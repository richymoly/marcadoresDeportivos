  
const express=require('express')
const mysql=require('mysql2')
const myconn=require('express-myconnection')
const routes=require('./routes')
const cors=require('cors')
 
const app=express()
 
app.set('port',9000)
app.use(cors())

const dbOptions={
    host: 'localhost',
    port:'3306',
    user:'root',
    password:'12345678',
    database: 'librery'
}

/// middelwares
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())

///routes
app.get('/',(req,res)=>{
   res.send('Welcome to my APP 2022')
})

app.use('/api',routes)

 
app.listen(app.get('port'),()=>{
    console.log(`El puerto corre en: ${app.get('port')}`)
})   