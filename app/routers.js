const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');
const db = require('./config/database')

module.exports = (app) => {
    app.get('/', function(req, res) {
            db.all("SELECT * FROM livros", (err, result) => {
                res.marko(
                    require('./views/books-list'),
                    {
                        books: result
                    }
                );
        });
    });
};