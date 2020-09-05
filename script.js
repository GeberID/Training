'use strict';

let NumberOfFilms = +prompt(`How many films do you se?`,'');


let personalMovieDB ={
    count:NumberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let LastFilm = prompt("Один из последних просмотренных фильмов?",'');
let level = +prompt('На сколько оцените его? (0-10)','0');

personalMovieDB.movies[LastFilm]=level;

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
