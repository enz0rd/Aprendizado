const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const { Sequelize, DataTypes } = require('sequelize')
const jwt = require('jsonwebtoken')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const s3cretP4s$ = "JDNfbDN1X200bTB1XyRoZTNzIw=="

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db'
})

const User = sequelize.define('users', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, email: {
        type: DataTypes.STRING(100),
        allowNull: false
    }, password: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},{
    timestamps: true,
    paranoid: true
})

const Post = sequelize.define('posts', {
    message: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
})

User.hasMany(Post)

app.post('/users', async (req,res) => {
    const user = new User()
    user.name = req.body.name,
    user.email = req.body.email,
    user.password = req.body.password,
    await user.save()
    res.json(user)
})

app.post('/login', async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    })
    if (!user) {
        res.status(401).json({ message: 'falha no login' });
    }
    if(user.password === req.body.password) {
        const token = jwt.sign({
            user
        }, s3cretP4s$, {
            expiresIn: 300
        })
        res.json({accessToken: token})
    } else {
        res.status(401).json({message: 'falha no login'})
    }
})

app.use((req, res, next) => {
    try {
        const token = req.headers.authorization
        jwt.verify(token, s3cretP4s$)
        next()
    } catch (error) {
        res.status(401).json({message: error.message})
    }
})

app.get('/posts', async (req,res) => {
    const post = await Post.findAll()
    res.json(post)
})

app.post('/posts', async (req,res) => {
    const userAuth = jwt.decode(req.headers.authorization).user
    const post = new Post()
    post.message = req.body.message,
    post.userId = userAuth.id,
    await post.save()
    res.json(post)
})

async function start() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    sequelize.sync();
    app.listen(3000, () => {
        console.log('app is running')
    })
}

start()