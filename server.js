const express = require("express");
const api = require("./api");
const app = express();

app.get('/api/news/', function (req, res) {
    let news = api.news();
        
    news.then( (result) => {
        console.log('Obteniendo noticias\nCantidad de Resultado:' +result.length);
        res.status(200).json(result);
    });
});

app.get('/api/news/:news_id', function (req, res) {
    let news = api.news(req.params.news_id);
        
    news.then( (result) => {
        console.log('Obteniendo noticia con id: '+ req.params.news_id + '\nResultado title:' +result.title);
        res.status(200).json(result);
    });
});

app.get('/api/categories/', function (req, res) {
    let categories = api.categories();
        
    categories.then( (result) => {
        console.log('Obteniendo categorias\nCantidad de Resultados:' +result.length);
        res.status(200).json(result);
    });
});

app.get('/api/categories/:category_id', function (req, res) {
    let categories = api.categories(req.params.category_id);

    categories.then( (result) => {
        console.log('Obteniendo categorias con id: '+ req.params.category_id + '\nResultado title:' +result.title);
        res.status(200).json(result);
    });
});

app.use('/', express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});