const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express()

app.use(cors());
app.use(bodyParser.json())

const alunos = []

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Olá, página inicial')
})

app.get('/alunos', (req, res) => {
    res.json(alunos)
})

app.get('/alunos/:id', (req, res) => {
    const aluno = alunos.find(aluno => aluno.id == req.params.id)
    res.json(aluno)
    res.send(alunos)
})

app.post('/alunos/add', (req, res) => {
    let id = uuidv4()
    let age = req.body.age
    let name = req.body.name
    alunos.push({id: id, name: name, age: age})
    res.send('Aluno adicionado!')
})

app.delete('/alunos/:id/delete', (req, res) => {
    const aluno = alunos.find(aluno => aluno.id == req.params.id)
    alunos.pop(aluno)
    res.send("Aluno Deletado!")
})

app.listen(3000, () => {
    console.log('App is running')
    console.log('Access in: http://localhost:3000')
})