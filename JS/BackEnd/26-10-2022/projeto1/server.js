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

    app.listen(3000, () => {
        console.log("App Running on")
        console.log("http://localhost:3000/")
    })
}

start();

app.post('/produtos/add', async (req, res) => {
    await conexao.run("insert into produtos (nome, preco, loja) values (:nome, :preco, :loja)",
    {
        ':nome': req.body.nome,
        ':preco': req.body.preco,
        ':loja': req.body.loja
    })

    res.send("Produto Cadastrado!")
})

app.delete('/produtos/:id', async (req, res) => {
    await conexao.run('delete from produtos where id = :id',
    {
        ':id': req.params.id
    })

    res.send("Produto Deletado!")
})

app.get("/produtos", async (req, res) => {
    const produtos = await conexao.all('select * from produtos')

    res.send(produtos)
})