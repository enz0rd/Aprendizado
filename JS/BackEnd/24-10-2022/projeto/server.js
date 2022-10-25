const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

const sessions = require('express-session')
const cookieParser = require('cookie-parser')

const oneDay = 1000 * 60 * 60 * 24;

app.use(bodyparser.json())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());
app.use(sessions({
    secret: "minhachavesecretalalalalawlfalkdfkls",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}))

var session = [];

app.post('/login', (req,res) => {
    if(req.body.email === "enz0rd@mail.com" && req.body.password === "123123") {
        session[req.sessionID] = (req.session);
        res.send('logado')
    } else {
        res.status(401).send('Email ou senha inválidos')
    }
})

app.post('/logout', (req,res) => {
    req.session.destroy();
    res.redirect('/');
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
})

app.use((req, res, next) => {
    if(session[req.sessionID]) {
        next()
    } else {
        res.status(401).send('Não Autorizado')
    }
})

app.get('/produtos', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/produtos.html'))
})

app.get('/empresas', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/empresas.html'))
})

app.listen(3000, () => {
    console.log('Server Running')
    console.log('http://localhost:3000/')
})