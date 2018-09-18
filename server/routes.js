const path = require('path');

const api = require("./controller.js")

const bp = require("body-parser");

module.exports = function(app){

    app.use(bp.json());

    app.get('/api/authors', api.allAuthors);
    app.post('/api/authors', api.makeAuthor);
    app.get('/api/authors/:_id', api.getAuthor);
    app.patch('/api/authors/:id', api.updateAuthor);
    app.delete('/api/authors/:id', api.deleteAuthor);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
    return app;

}
