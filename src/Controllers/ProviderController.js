const { connect } = require("../Connections/mysql.db");


async function findAllProviderController(req, res) {
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM fornecedores;");

    res.status(200).json({rows})

    return rows;
}

module.exports = findAllProviderController