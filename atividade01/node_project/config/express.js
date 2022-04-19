let express = require("express");

let usuariosRouter = require('../app/routes/usuarios.js');
let postsRouter = require('../app/routes/posts.js');


module.exports = function() {
    let app = express();
    app.set("port", 3000);
    app.use(express.json());
    app.use(express.urlencoded({extended:false}))
    usuariosRouter(app);
    postsRouter(app);
    return app;
};