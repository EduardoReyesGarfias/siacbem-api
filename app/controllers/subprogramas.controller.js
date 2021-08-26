const { db } =  require('../config/db');

/**
 * Regresa todos los subprogramas
 * @param {*} req 
 * @param {*} res 
 */
const getSubprogramas = async (req, res) =>{
    const query = "SELECT * FROM subprogramas";
    const response = await db.query(query);
    res.status(200).json({error: 0, data: response.rows, msg: 'ok'});
}

module.exports = {
    getSubprogramas
}