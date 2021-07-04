module.exports = {
    create(req, res){
        let roomId = 230621
        
        res.redirect(`/room/${roomId}`)
    }
}