const { connect } = require("../Connections/mysql.db");


async function findAllProductsController(req, res) {
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM produtos;");

    res.status(200).json({rows})

    return rows;
}

module.exports = findAllProductsController