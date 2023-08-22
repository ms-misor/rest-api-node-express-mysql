const pool = require("../database/index")

const customController = {

    testing: async (req, res) => {
        try{
            const {id} = req.params
            // const sql = "delete from posts where id = ?"
            // const [rows,fields] = await pool.query(sql, [id])
            res.json({
                data: "id: "+id,
            })
        }catch(error){
            console.log(error)
            res.json({
                state: "error",
            })
        }
    },
    test: async (req, res) => {
        try{
            const {cat_id} = req.params
            // const sql = "delete from posts where id = ?"
            // const [rows,fields] = await pool.query(sql, [id])
            res.json({
                data: "cat_id: "+cat_id,
            })
        }catch(error){
            console.log(error)
            res.json({
                state: "error",
            })
        }
    }
}

module.exports = customController