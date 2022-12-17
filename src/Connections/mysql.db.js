async function connect() {

    let connectionUri = process.env.NODE_URL_MYSQL

    if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(connectionUri)
    console.log("Connected with success!!")
    global.connection = connection;
    return connection;
}

connect()

async function createFornecedor(customer) {
    const conn = await connect();
    const sql = "INSERT INTO fornecedores (nome, telefone) VALUES (?,?);";
    const values = [customer.nome, customer.telefone];
    return await conn.query(sql, values)
}



module.exports = { createFornecedor, connect };