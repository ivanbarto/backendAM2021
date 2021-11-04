/**
 * CURSO API REST con NODEJS
 * https://www.youtube.com/watch?v=bK3AJfs7qNY&ab_channel=FaztCode
 * 
 * Dejé en: min 1:06:44
 */


const express = require('express');
const app = express();
const morgan = require('morgan');


// settings
/**
 * process.env.PORT indica que si hay algún puerto definido por el sistema o servicio en la nube
 * para esta API, pues que se use ese, si no usar el 3000.
 */
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


//middlewares
/*dev es sencillo, existen otros mas detallados (ver con ctrl + space)*/
app.use(morgan('dev')); 
/*para el el sv entienda formato JSON*/
app.use(express.json());
/*para el el sv entienda formato formulario*/
app.use(express.urlencoded({extended: true}));

//routes
app.use(require('./routes/index'));
app.use('/api/course', require('./routes/courses'));
app.use('/api/event', require('./routes/events'));
app.use('/api', require('./routes/login'));

/**acá le indico que la ruta de la api tien el prefijo '/api/movies' */
//app.use('/api/movies', require('./routes/movies'));


//starting the server
/*especificamos qué puerto va a escuchar la api*/
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 


