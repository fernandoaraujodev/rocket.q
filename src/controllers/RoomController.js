const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const password = req.body.password

        let roomId 

        //Metodo para gerar id de 6 numeros da sala
        for(var i = 0; i < 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()      
        }

        await db.run(`INSERT INTO rooms (
            id,
            password
        ) VALUES (
            ${parseInt(roomId)},
            ${password}
        )`)

        await db.close()
        
        res.redirect(`/room/${roomId}`)
    }
}