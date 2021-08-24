const { dbConect } = require('../config/db');

/**
 * Regresa todos los grupos existentes
 * @param {*} req 
 * @param {*} res 
 */
const getGrupos = async (req, res) =>{
    
    const query = "SELECT * FROM grupos";
    const response = await dbConect.query(query);
    res.status(200).json({error: 0, data: response.rows, msg: 'ok'});
    
}

/**
 * Regresa los grupos de un subprograma en especifico
 * @param {*} req 
 * @param {*} res 
 */
const getGruposBySubprograma = async (req, res) =>{

    const idSubprograma = Number(req.params._id);
    if(idSubprograma > 0){
        
        const query = `SELECT * FROM grupos WHERE id_subprograma = $1`;
        const response = await dbConect.query(query, [idSubprograma]);

        if(Number(response.rowCount) > 0)
            res.status(200).json({error: 0, data: response.rows, msg: 'ok'});
        else    
            res.status(200).send({error: 1, data: '', msg : `El id ${idSubprograma} no cuenta con grupos`});
    }
    else{
        res.status(400).send({error: 2, data: '', msg : `Error with your request`});
    }    
    
}

module.exports = {
    getGrupos,
    getGruposBySubprograma
}