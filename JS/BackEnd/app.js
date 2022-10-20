const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { uuid } = require('uuidv4');

const app = express()

app.use(cors());
app.use(bodyParser.json())

const alunos = [];

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Olá`)
})

app.get('/alunos', (req, res) => {
    res.json(alunos)
})

app.get('/alunos/:id', (req, res) => {
    const aluno = alunos.find(aluno => aluno.id == req.params.id)
    res.json(aluno)
    res.send(alunos)
})

app.get('/alunos/comparar/:age', (req,res) => {
    let alunosComparados = alunos.filter(item => {
        return item.age == req.params.age
    })
    alunosComparados = alunosComparados.sort((p1,p2) => (p1.age < p2.age) ? -1 : (p1.age > p2.age) ? 1 : 0)
    res.json(alunosComparados);
})

app.post('/alunos/add', (req, res) => {
    const aluno = req.body
    alunos.push(aluno)
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