const express= require("express");
const app= express();
const path= require('path')
const bodyParser= require('body-parser')

app.listen(3000,()=>{
    console.log('connect');
});

const mysql= require('mysql');
const connection=mysql. createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crudexpress'

});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else {
        console.log('berhasil konek database');
    }
});

app.set('views', path.join(__dirname,'views'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req, res)=>{
    let sql ="SELECT * FROM user";
    connection.query(sql,(err, rows)=>{
        if(err) throw err;
        res.render('userindex',{
            title : 'CRUD Express',
            users:rows
        });
    });
});

app.get('/add',(req, res)=>{
    res.render('user_add',{
        title: 'Tambah user'
    });
} );


app.post('/save',(req, res)=>{
    console.log(req);
    let data ={ 
        nama: req.body.nama, 
        email:req.body.email, 
        telp:req.body.telp
    };
    let sql ="INSERT INTO user SET ?";
    let query = connection.query(sql, data,(err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
});


app.get('/edit/:userId',(req, res)=>{
    const userId = req.params.userId;
    let sql ='Select * from user where id = '+userId;
    let query = connection.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result[0]);
        res.render('user_edit', {
            title: 'Edit data',
            user: result[0]
        });
    });
});


app.post('/update',(req,res)=>{
    console.log(req.body);
    const body = req.body
    const userId = req.body.id;
    let sql = "UPDATE user SET ? WHERE id =" + userId
    // let sql= "update user set nama='"+req.body.nama+"', email='"+req.body.email+"', telp='"+req.body.telp+"' where id =" + userId;
    let query= connection.query(sql, body, (err, result)=>{
        if(err)throw err;
        res.redirect('/');
    });
});


app.get('/delete/:userId',(req,res)=>{
    const userId = req.params.userId;
    let sql = `DELETE from user where id = ${userId}`;
    let query = connection.query(sql,(err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
});