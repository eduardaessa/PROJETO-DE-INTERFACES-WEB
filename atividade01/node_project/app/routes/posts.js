let controller = require("../controllers/posts.js");

module.exports = function(app) {
    app.get('/posts', controller.listarPosts);
    app.get('/posts/:id', controller.getPosts);
    app.get('/posts/:id', controller.buscarPostPorId);
    app.delete('/posts/:id', controller.deletarPost);
    app.post('/posts', controller.inserirPosts);
    
};

