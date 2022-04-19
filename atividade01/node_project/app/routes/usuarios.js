let controller = require("../controllers/usuarios.js");

module.exports = function(app) {
    app.get('/usuarios', controller.listaUsuarios);
    app.get('/usuarios/:id', controller.getUsuarios);
    app.get('/usuarios/:id', controller.buscarUsuarioPorId);
    app.delete('/usuarios/:id', controller.deletarUsuario);
    app.post('/usuarios', controller.inserirUsuarios)
};



