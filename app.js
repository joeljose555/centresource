const   express     =   require('express')
const   app         =   express()
const   mysql       =   require('mysql2')
const   db          =   require('./models')
const   routes      =   require('./src/routes/index')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(routes)

db.sequelize.sync().then((req)=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log('server started on port 3000')
    })
})