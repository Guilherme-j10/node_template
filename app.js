const express = require('express');
const app = express();
const path = require('path');
const routes = require('./src/routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'view'));
app.set('view engine', 'ejs');

app.use(routes);

let port = 3000;

app.listen(port, () => {
    console.log('Acesse na porta http://localhost:'+port);
});