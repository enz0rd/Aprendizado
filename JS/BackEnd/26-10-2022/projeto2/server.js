const express = require('express');
const bodyParser = require('body-parser')
const { Sequelize, DataTypes, STRING, INTEGER} = require('sequelize');
const app = express();

app.use(bodyParser.json())

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db'
});

const Produto = sequelize.define('produto', {
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,         
    },
    preco: {
      type: DataTypes.FLOAT
    },
    loja: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    validade: {
        type: DataTypes.DATE,
        allowNull: true
    }
  }, {
    timestamps: true,
    paranoid: true
});

app.post('/produtos', async (req, res) => {
    const produto = await Produto.create({
        nome: req.body.nome,
        preco: req.body.preco,
        loja: req.body.loja,
        validade: req.body.validade
    })
    res.json(produto);
});

app.delete('/produtos/:id',async( req, res ) => {
    await Produto.destroy({
      where: {
        id: req.params.id
      }
    });
    res.send('deletado')
})

app.get('/produtos', async (req,res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
})

app.put('/produtos/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id);
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.loja = req.body.loja;
    produto.validade = req.body.validade;
    produto.save();
    res.json(produto);
})

const Cliente = sequelize.define('clientes', {
    nome: {
        type: STRING(50),
        allowNull: false
    },
    idade: {
        type: INTEGER,
        allowNull: false
    },
    telefone: {
        type: INTEGER
    },
    endereco: {
        type: STRING(50)
    },
    cidade: {
        type: STRING(20)
    },
    uf: {
        type: STRING(2)
    }
}, {
    timestamps: true,
    paranoid: true
})

app.post('/clientes', async (req, res) => {
    const cliente = await Cliente.create({
        nome: req.body.nome,
        idade: req.body.idade,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        uf: req.body.uf
    })
    res.json(cliente);
});

app.delete('/clientes/:id',async( req, res ) => {
    await Cliente.destroy({
      where: {
        id: req.params.id
      }
    });
    res.send('deletado')
})

app.get('/clientes', async (req,res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
})

app.put('/clientes/:id', async (req, res) => {
    const clientes = await Cliente.findByPk(req.params.id);
    clientes.nome = req.body.nome;
    clientes.idade = req.body.idade;
    clientes.telefone = req.body.telefone;
    clientes.endereco = req.body.endereco;
    clientes.cidade = req.body.cidade;
    clientes.uf = req.body.uf;
    clientes.save();
    res.json(clientes);
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