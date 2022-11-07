const express = require('express');
const bodyParser = require('body-parser')
const { Sequelize, DataTypes, STRING, INTEGER} = require('sequelize');
const app = express();

app.use(bodyParser.json())

// Criar BD em SQLite

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db'
});

// Tabela de Produtos no BD

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

// Criar um produto

app.post('/produtos', async (req, res) => {
    const produto = await Produto.create({
        nome: req.body.nome,
        preco: req.body.preco,
        loja: req.body.loja,
        validade: req.body.validade
    })
    res.json(produto);
});

// Deletar um Produto

app.delete('/produtos/:id',async( req, res ) => {
    await Produto.destroy({
      where: {
        id: req.params.id
      }
    });
    res.send('deletado')
})

// Ver todos os produtos

app.get('/produtos', async (req,res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
})

// Ver um produto

app.get('/produtos/:id', async (req,res) => {
    const produtos = await Produto.findAll({
        where: {
            id: req.params.id
        }
    });
    res.json(produtos);
})

// Editar produto

app.put('/produtos/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id);
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.loja = req.body.loja;
    produto.validade = req.body.validade;
    produto.save();
    res.json(produto);
})

// Tabela no BD de Clientes

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

// Cadastrar um cliente

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

// Deletar um cliente

app.delete('/clientes/:id',async( req, res ) => {
    await Cliente.destroy({
      where: {
        id: req.params.id
      }
    });
    res.send('deletado')
})

// Ver todos os Clientes

app.get('/clientes', async (req,res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
})

// achar um cliente

app.get('/clientes/:id', async (req,res) => {
    const cliente = await Cliente.findAll({
        where: {
          id: req.params.id
        }
      });
    res.json(cliente);
})

//editar cliente

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