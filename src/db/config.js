const sqlite3 = require("sqlite3");
const { open } = require("sqlite")

//exportando o módulo
module.exports = () => 
    open({
        //caminho do banco
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });
