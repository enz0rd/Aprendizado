const express = require('express')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db'
})

const app = express()

app.use(bodyParser.json())

async function start() {
    try {
        await sequelize.authenticate();
        console.log("connection has been established successfully.");
    } catch (error) {
        console.error('unable to connect to the database: ', error);
    }

    app.listen(3000, () => {
        console.log('app is running')
    })
}
start ()