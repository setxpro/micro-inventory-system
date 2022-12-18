require('dotenv').config();
require('./Connections/mysql.db')
const express = require('express');
const cors = require('cors');
const router = require('./Routers/router')

const app = express();

app.use(express.json())
app.use(cors());

app.use('/api', router)


app.listen(3333, () => console.log("Connected..."))