const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

class BooksDTO {

    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all("SELECT * FROM livros", (err, result) => {
                if(err) {
                    return reject('Nao foi possivel listar os livros')
                }
                return resolve(result);
             });
        });
        
    }

    create(body) {
        return new Promise((resolve, reject) => {
            this._db.run(`INSERT INTO livros (titulo, preco, descricao) VALUES (?,?,?)`, [
                body.titulo, 
                body.preco, 
                body.descricao
            ], (err) => {
                return err ? reject('Nao foi possivel cadastrar o livro') : null;
            });
        });
    }
}

module.exports = BooksDTO;
