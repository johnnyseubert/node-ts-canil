import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

// libera o uso do arquivo .env
dotenv.config();

const server = express();

// Configurando servidor para utilizar mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache());

// Libera a utilização de arquivos publicos
server.use(express.static(path.join(__dirname, '../public')))

//Rotas
server.use(mainRoutes);

// Rota default 404
server.use((req, res) => {
    res.render('pages/404')
})

server.listen(process.env.PORT, () => console.log(`Server is running http://localhost:${process.env.PORT}`));