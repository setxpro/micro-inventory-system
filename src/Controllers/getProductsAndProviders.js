const { connect } = require("../Connections/mysql.db");


async function getProductsAndProviders(req, res) {
    const conn = await connect();
    const [rows] = await conn.query("SELECT produtos.*, fornecedores.nome AS fornecedor FROM produtos INNER JOIN fornecedores ON fornecedores.id = produtos.fornecedorId;");
    res.status(200).json({rows})
    return rows;
}

module.exports = getProductsAndProviders