const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(bodyParser.json())

const alunos = [
    {id: 1, name: 'Enzo'},
    {id: 2, name: 'Soraia'},
    {id: 3, name: 'Jonas'},
    {id: 4, name: 'João'},
    {id: 5, name: 'Garen'},
    {id: 6, name: 'Paulo Plínio'}]

app.get('/alunos', (req, res) => {
    res.json(alunos)
})

app.get('/alunos/:id', (req, res) => {
    const aluno = alunos.find(aluno => aluno.id == req.params.id)
    res.json(aluno)
})

app.listen(3000, () => {
    console.log('App is running')
})