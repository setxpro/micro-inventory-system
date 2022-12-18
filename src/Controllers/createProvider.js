const { connect } = require("../Connections/mysql.db");


async function createProvider(req, res) {

    const { nomeFornecedor, telefone } = req.body;

    const conn = await connect();

    const sql = "INSERT INTO fornecedores (nomeFornecedor, telefone) VALUES (?,?);";
    const values = [nomeFornecedor, telefone];
    res.status(201).json({status: true, message: "Fornecedor cadastrado com sucesso!"})
    return await conn.query(sql, values)
}

module.exports = createProvider