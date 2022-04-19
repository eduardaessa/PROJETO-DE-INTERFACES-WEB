let usuarios = [];

module.exports.listaUsuarios = function(req, res) {
    res.json(usuarios);
};

module.exports.getUsuarios = function(req, res) {
    let id = req.params.id;
    let usuario = usuarios.find(usuario => (usuario.id==id));
    if(usuario) {
        res.json(usuario);
    } else {
        res.status(404).send('Aluno não encontrado');
    }
};

module.exports.buscarUsuarioPorId = function(req, res){
    let id = req.params.id;
    let usuario = usuarios.find(usuario => (usuario.id==id));
    if(usuario) {
        res.json(usuario);
    } else {
        res.status(404).send("Usuário não encontrado!")
    }
}

module.exports.inserirUsuarios = function(req, res){
    let usuario = req.body;
    let usuarioRepetido = usuarios.find(a => (a.id == usuario.id));
    console.log(usuario);

    if(!usuarioRepetido) {
        usuarios.push(usuario);
        res.status(201).json(usuario);
        res.json("Usuário deletado")
    } else {
        res.status(404).sent("Usuário já existe!")
    }
};

module.exports.deletarUsuario = function(req, res){
    let id = req.params.id;
    let usuarioRepetido = usuarios.find(a => (a.id == id));
    if(usuarioRepetido) {
        usuarios = usuarios.filter(function(usuario){return usuario.id!=id});
        res.json("Usuário deletado")
    } else {
        res.status(404).json("Usuário não encontrado")

    }
};