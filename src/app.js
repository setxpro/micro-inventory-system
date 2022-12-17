require('dotenv').config();
require('./Connections/mysql.db')
const express = require('express');
const router = require('./Routers/router')

const app = express();

app.use(express.json())

app.use('/api', router)


app.listen(3333, () => console.log("Connected..."))