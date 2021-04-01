const BooksDTO = require('./infra/books-dto');
const db = require('./config/database');

module.exports = (app) => {
    let dto = new BooksDTO(db);
    app.get('/livros', function(req, res) {
        dto.list().then((result) => {
            res.marko(
                require('./views/books-list'),
                {
                    books: result
                }
            )
        }).catch(err => {
            console.error(err);
        });
    });

    app.get('/livros/form', function(req, res) {
        res.marko(require('./views/books-form'));
    });

    app.post('/livros', function(req, res) {
        dto.create(req.body)
        .then(res.redirect('/livros'))
        .catch(erro => console.log(erro));
    });
};