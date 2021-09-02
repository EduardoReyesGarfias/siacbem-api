const { db } =  require('../../config/db');

/**
 * Regresa todos los subprogramas
 * @param {*} req 
 * @param {*} res 
 */
const getSubprogramas = async (req, res) =>{

    try {
        const query = "SELECT * FROM subprogramas ORDER BY nombre_subprograma";
        const response = await db.query(query);
        res.status(200).json({error: 0, data: response.rows, msg: 'ok'});
    } catch (error) {
        res.status(400).json({error: 1, data: '', msg: 'Hubo un error'});
    }
    
}

/**
 * Regresa un subprograma por su idSubprograma
 * @param {*} req 
 * @param {*} res 
 */
const getSubprogramaById = async(req, res) =>{

    const idSubprograma = Number(req.params._id);
    try {
        const query = `SELECT * FROM subprogramas WHERE id_subprograma = CAST(${idSubprograma} AS int) ORDER BY nombre_subprograma`;
        const response = await db.query(query);
        res.status(200).json({error: 0, data: response.rows, msg: 'ok'});
    } catch (error) {
        res.status(400).json({error: 1, data: '', msg: 'Hubo un error'});
    }
    
}

/**
 * Regresa el subprograma de acuerdo al nombre
 * @param {*} req 
 * @param {*} res 
 */
const getSubprogramaByName = async(req, res) =>{

    const nombreSubprograma = String(req.params._nombre);

    try {
        const query = `SELECT * FROM subprogramas WHERE nombre_subprograma ilike CAST('%${nombreSubprograma}%' AS text) ORDER BY nombre_subprograma`;
        const response = await db.query(query);
        res.status(200).json({error: 0, data: response.rows, msg: 'ok'});
    } catch (error) {
        res.status(400).json({error: 1, data: '', msg: 'Hubo un error'});
    }

    
}


const getSubprogramaByClave = async(req, res) =>{

    const claveSubprograma = String(req.params._clave);   
    try {
        const query = `SELECT * FROM subprogramas WHERE clave_subprograma = CAST('${claveSubprograma}' AS text)`;
        const response = await db.query(query);
        console.log(response);
        res.status(200).json({error: 0, data: response.rows, msg: 'ok'});
    } catch (error) {
        res.status(400).json({error: 1, data: '', msg: 'Hubo un error'});
    }
}


module.exports = {
    getSubprogramas,
    getSubprogramaById,
    getSubprogramaByName,
    getSubprogramaByClave
}