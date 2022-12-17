const { connect } = require("../Connections/mysql.db");


async function createProduct(req, res) {

    const { nome, fornecedorId, preço, estoque, minEstoque } = req.body;

    const conn = await connect();

    const sql = "INSERT INTO produtos (nome, fornecedorID, preço, estoque, minEstoque) VALUES (?,?,?,?,?);";
    const values = [nome, fornecedorId, preço, estoque, minEstoque];
    res.status(201).json({status: true, message: "Produto cadastrado com sucesso!"})
    return await conn.query(sql, values)
}

module.exports = createProduct