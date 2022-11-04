const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const sqlite3 = require("sqlite3")
const sqlite = require("sqlite")

app.use(bodyParser.json())

async function connectBanco() {
    return await sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database
    })
}

async function start() {
    conexao = await connectBanco()
    await conexao.exec("Create table if not exists produtos (id INTEGER PRIMARY KEY, nome TEXT, preco FLOAT, loja TEXT)")
    await conexao.exec("Create table if not exists clientes (id INTEGER PRIMARY KEY, nome TEXT, telefone VARCHAR(11), idade INTEGER, endereco VARCHAR(100), cidade VARCHAR(100))")

    app.listen(3000, () => {
        console.log("App Running on")
        console.log("http://localhost:3000/")
    })
}

start();

app.get("/produtos", async (req, res) => {
    const produtos = await conexao.all('select * from produtos')

    res.send(produtos)
})

app.post('/produtos/add', async (req, res) => {
    await conexao.run("insert into produtos (nome, preco, loja) values (:nome, :preco, :loja)",
    {
        ':nome': req.body.nome,
        ':preco': req.body.preco,
        ':loja': req.body.loja
    })

    res.send("Produto Cadastrado!")
})

app.patch('/produtos/update/:id', async (req, res) => {

    let id = req.params.id
    let nome = req.body.nome
    let preco = req.body.preco
    let loja = req.body.loja

    if(nome != null) {
        if(preco != null) {
            if(loja != null) {
                await conexao.run(`update produtos set nome = :nome, preco = :preco, loja = :loja where id = ${id}`,
                {
                    ':nome': nome,
                    ':preco': preco,
                    ':loja': loja
                })
                res.send('Nome, preço e loja alterados')
            } else if (loja == null) {
                await conexao.run(`update produtos set nome = :nome, preco = :preco where id = ${id}`,
                {
                    ':nome': nome,
                    ':preco': preco
                })
                res.send('Nome e preço alterados')
            }
        } else if(preco == null) {
            if(loja != null) {
                await conexao.run(`update produtos set nome = :nome, loja = :loja where id = ${id}`,
                {
                    ':nome': nome,
                    ':loja': loja
                })
                res.send('Nome e loja alterados')
            } else if (loja == null) {
                await conexao.run(`update produtos set nome = :nome where id = ${id}`,
                {
                    ':nome': nome
                })
                res.send('Nome alterado')
            }
        }
    } else if(nome == null) {
        if(preco != null) {
            if(loja != null) {
                await conexao.run(`update produtos set preco = :preco, loja = :loja where id = ${id}`,
                {
                    ':preco': preco,
                    ':loja': loja
                })
                res.send('Loja e Preço alterados')
            } else if (loja == null) {
                await conexao.run(`update produtos set preco = :preco where id = ${id}`,
                {
                    ':preco': preco
                })
                res.send('Preço alterado')
            }
        } else if(preco == null) {
            if(loja != null) {
                await conexao.run(`update produtos set loja = :loja where id = ${id}`,
                {
                    ':loja': loja
                })
                res.send('Loja alterada')
            } else if (loja == null) {
                res.send('nada alterado')
            }
        }
    }
})

app.delete('/produtos/:id', async (req, res) => {
    await conexao.run('delete from produtos where id = :id',
    {
        ':id': req.params.id
    })

    res.send("Produto Deletado!")
})

app.get("/clientes", async (req, res) => {
    const clientes = await conexao.all('select * from clientes')

    res.send(clientes)
})

app.get("/clientes/:id", async (req, res) => {
    const clientes = await conexao.all(`select * from clientes where id = ${req.params.id}`)

    res.send(clientes)
})

app.post('/clientes/add', async (req, res) => {
    await conexao.run("insert into clientes (nome, telefone, idade, endereco, cidade) values (:nome, :telefone, :idade, :endereco, :cidade)",
    {
        ':nome': req.body.nome,
        ':telefone': req.body.telefone,
        ':idade': req.body.idade,
        ':endereco': req.body.endereco,
        ':cidade': req.body.cidade
    })

    res.send("Cliente Cadastrado!")
})