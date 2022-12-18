const { connect } = require("../Connections/mysql.db");


async function getProductsAndProviders(req, res) {
    const conn = await connect();
    const [rows] = await conn.query("SELECT *  FROM produtos INNER JOIN fornecedores ON fornecedores.id = produtos.fornecedorId;");
    res.status(200).json({rows})
    return rows;
}

module.exports = getProductsAndProviders