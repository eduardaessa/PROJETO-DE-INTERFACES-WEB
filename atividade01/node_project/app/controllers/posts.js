let posts = [];

module.exports.listarPosts = function(req, res) {
    res.json(posts);
};

module.exports.getPosts = function(req, res) {
    let id = req.params.id;
    let post = posts.find(post => (post.id==id));
    if(post) {
        res.json(post);
    } else {
        res.status(404).send('Post não encontrado');
    }
};

module.exports.buscarPostPorId = function(req, res){
    let id = req.params.id;
    let post = posts.find(post => (post.id==id));
    if(post) {
        res.json(post);
    } else {
        res.status(404).send("Post não encontrado!")
    }
}

module.exports.inserirPosts = function(req, res){
    let post = req.body;
    let postRepetido = posts.find(a => (a.id == post.id));
    if(!postRepetido) {
        posts.push(post);
        res.status(201).json(post);
    } else {
        res.status(404).json("Post já existe!")
    }
};

module.exports.deletarPost = function(req, res){
    let id = req.params.id;
    let postRepetido = posts.find(a => (a.id == id));
    if(postRepetido) {
        posts = posts.filter(function(post){return post.id!=id});
        res.json("Post deletado")
    } else {
        res.status(404).json("Post não encontrado")

    }
};
