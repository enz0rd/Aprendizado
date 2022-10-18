const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express()

app.use(cors());
app.use(bodyParser.json())

const alunos = [{
    id: "85a8b64d-800c-415e-bbd5-30ad0e1b0dfe",
    name: "Jorge",
    age: 22
},
{
    id: "53c0b0be-8416-4c01-9fd6-d5247cb8c2de",
    name: "Jorge",
    age: 33
},
{
    id: "c5c8e3c4-01be-43fc-ad52-a0b27814c4ac",
    name: "Josué",
    age: 45
},
{
    id: "d4c55086-164c-4874-8773-1f97cb4b73af",
    name: "jhonatan",
    age: 22
},
{
    id: "c1687429-d36e-4c6a-8ede-401e9ac46c30",
    name: "Adilson",
    age: 22
},
{
    id: "8eead2d9-39f8-422d-a991-23ce2fb1a90b",
    name: "Mosca",
    age: 22
}]

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