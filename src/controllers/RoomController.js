const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const password = req.body.password
        let roomId
        let isRoom = true
        
        while(isRoom){

            //Metodo para gerar id de 6 numeros da sala
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()      
            }

            // Verificar se o id da sala já existe
            const roomsExistIds = await db.all(`SELECT id FROM rooms `)
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

            if(! isRoom){
                /* Insere a sala no db */
                await db.run(`INSERT INTO rooms (
                    id,
                    password
                ) VALUES (
                    ${parseInt(roomId)},
                    ${password}
                )`)
            }

        }


        await db.close()
        
        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        
        res.render('room', {roomId: roomId, 
                            questions: questions,
                            questionsRead: questionsRead})
    }
}