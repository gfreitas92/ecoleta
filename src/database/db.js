const { query } = require("express")

//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados, para  nossa operação
db.serialize(() => {
//Com comandos SQL vou:

//1-Cirar uma tabela com comandos SQL
/*db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT

    );
`)

//2-Inserir dados da tablea
const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city, 
        items
    ) VALUES (?,?,?,?,?,?,?);
`

const values = [
"https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=861&q=80",
"Papersider",
"Guilherme Gamballa, Jardím América",
"Numero 260",
"Santa Catarina",
"Rio Grande do Sul",
"Papeis e Papelão",

]

function afterInsertData(err) {
if(err) {
    return console.log(err)
}

console.log("Cadastro com Sucesso")
console.log(this)
}

db.run(query, values, afterInsertData)

//3-Consultar os dados da tabla
db.all(`SELECT * FROM places`, function(err,rows){
    if(err) {
        return console.log(err)
    }
   console.log("Aqui estão seus registros")
    console.log(rows)
})

//4-Deletar um dado de tabela
db.run(`DELETE FROM places WHERE id = ?`, [8], function(err){
    if (err) {
        return console.log(err)
    }

    console.log("Registros deletados com sucesso!")
})

//3-Consultar os dados da tabla
db.all(`SELECT * FROM places`, function (err, rows) {
if (err) {
    return console.log(err)
}

console.log("Aqui estão seus registros")
console.log(rows)
})*/
})
