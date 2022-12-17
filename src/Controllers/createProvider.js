const { connect } = require("../Connections/mysql.db");


async function createProvider(req, res) {

    const { nome, telefone } = req.body;

    const conn = await connect();

    const sql = "INSERT INTO fornecedores (nome, telefone) VALUES (?,?);";
    const values = [nome, telefone];
    res.status(201).json({status: true, message: "Fornecedor cadastrado com sucesso!"})
    return await conn.query(sql, values)
}

module.exports = createProvider