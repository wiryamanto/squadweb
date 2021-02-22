
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const mysql =require('mysql');
const { title } = require('process');
const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'acil'

});
connection.connect(function(error){
    if(error) console.log(error);
    else console.log('connectDB');
});

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => { //request menangkap request dari luar , res merespons request ke luar
    // res.send('CRUD Operation using NodeJS / ExpressJS / MySQL');
    let sql = "SELECT * FROM users"; //menampilkan data users
    let query = connection.query(sql, (err, rows) => {
        if (err){
             throw err;
        } else {//error handling
        res.render('user_index', {
            title: 'CRUD Operation using NodeJS / ExpressJS / MySQL',
            users: rows
        });
    }
    });
});

app.get('/add', (req, res) => {
    res.render('user_add', {
        title: ' Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.post('/save',(req, res)=> {
    let data = {nama:req.body.nama, email:req.body.email, telp:req.body.telp};
    let sql = "INSERT INTO users SET ?";
    let query = connection.query(sql, data,(err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/edit/:userId',(req,res)=>{
    const userId= req.params.userId;
    let sql = `select * from users where id= '${userId}'`
    let query = connection.query(sql,(err, result)=>{
        if(err) throw err;
        res.render('user_edit',{
            users :result[0]
        })
    })
})

app.post('/update',(req,res)=>{
    const userId= req.body.id;
    let sql = `update users set nama ='${req.body.nama}', email='${req.body.email}', telp=${req.body.telp} where id=${userId}`;
    let query = connection.query(sql, (err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/delete/:userId',(req,res)=>{
    const userId = req.params.userId;
    let sql = `DELETE from users where id = '${userId}'`;
    let query = connection.query(sql,(err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
});

app.listen(3000, () =>{
    console.log('server running at port 3000');
});