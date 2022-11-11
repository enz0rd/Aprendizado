const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes } = require('sequelize')
const jwt = require('jsonwebtoken')

const secretpass = '1023_senha_s3cr3t4'

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

app.post('/users', async (req,res) => {
    const user = new User()
    user.name = req.body.name,
    user.email = req.body.email,
    user.password = req.body.password,    
    await user.save()
    res.json(user)
})

app.post('/login', async (req,res) => {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.status(401).json({ message: 'falha no login' });
    }
    if (user.password === req.body.password) {
      const token = jwt.sign({
        user
    },
        secretpass, {
          expiresIn: 120
        }
    );
      res.json({ accessToken: token });
    } else {
      res.status(401).json({ message: 'falha no login' });
    }
});

app.use(async (req, res, next) => {
    try {
      const token = req.headers.authorization
      jwt.verify(token, secretpass)
      next()
    } catch(error) {
      res.status(401).json({message: error.message})
    }
});

app.get('/posts', async (req,res) => {
    const post = await sequelize.query('select posts.id, name, message, posts.createdAt from posts, users where posts.userId = users.id');
    res.json(post)
})

app.post('/posts', async (req, res) => {
    const userAuth = jwt.decode(req.headers.authorization).user
    const post = new Post();
    post.message = req.body.message;
    post.userId = userAuth.id;
    await post.save();
    res.json(post);
  });

app.delete('/posts/:id', async (req, res) => {
  const deletePost = Post.destroy({
    where: {
      id: req.params.id
    }
  })
  await deletePost
  res.send("post deletado")
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