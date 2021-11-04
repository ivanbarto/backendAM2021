//routes
const { Router } = require('express');
const router = Router();
const _ = require('underscore');


// router.get('/all', (req, res) => {
//     const movies = require('./moviesList.json');
//     console.log(movies);
//     res.json(movies);
// });

// router.post('/all', (req, res) => {
//     console.log(req.body);

//     //defino 4 variables que toman lo que viene en el body
//     const { id, name, year, rating } = req.body;

//     if (name && year && rating) {
//         const movies = require('./moviesList.json');
//         //agregamos un id y pasamos todo lo que viene dentro de request.body
//         const id = movies.length + 1;
//         const newMovie = { ...req.body, id };
//         //inyectamos al final del array de json
//         movies.push(newMovie);
//         console.log(movies);
//         res.json({"success" : true});
//     } else {
//         res.status(400).send('faltan datos');
//     }
// });

// router.delete('/:id', (req, res) => {
//     var filmWasDeleted = false
//     const movies = require('./moviesList.json');

//     const {id} = req.params;

//     _.each(movies, (movie, index) => {
//         if(movie.id == id){
//             movies.splice(index, 1);  
//             filmWasDeleted = true;
//         }
//     });
    
//     if(filmWasDeleted){
//         res.json(movies);
//     }else{
//         res.status(400).json({"mensaje" : "la pelicula no existe"});
//     }
// });


// router.put('/all', (req, res) => {

//     const movies = require('./moviesList.json');
//     const {id, name, year, rating} = req.body;

//     if(id && name && year && rating){
//         _.each(movies, (movie, index) => {
//             if(movie.id == id){
//                 movie.name = name;
//                 movie.year = year;
//                 movie.rating = rating;
//             }
//         });

//         res.json(movies);
//     }else{
//         res.status(400).json({"mensaje" : "la pelicula no existe"});
//     }

    
    
//     res.json({"deleted" : filWasEdited})
// });



module.exports = router;