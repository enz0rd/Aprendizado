const express = require('express');
const sqlite = require('sqlite')
const cors = require('cors')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes } = require('sequelize')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db'
});

const User = sequelize.define('users', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true
})

const Post = sequelize.define('post', {
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Post)

app.get('/', (req,res) => {
    res.send('Página Inicial')
})

app.get('/users', async (req,res) => {
    const users = await User.findAll();
    res.json(users)
})

app.post('/users', async (req,res) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    res.json(user)
})

app.get('/posts', async (req,res) => {
    const post = await Post.findAll();
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

start();