'use strict';

let NumberOfFilms = +prompt(`How many films do you se?`, '');

let personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*for (let i = 0; i < 2; i++) {
    let LastFilm = prompt("Один из последних просмотренных фильмов?", '');
    let level = +prompt('На сколько оцените его? (0-10)', '0');
    if (LastFilm != '' && LastFilm !== null && LastFilm.length < 50 &&
        level != '' && level !== null) {
        personalMovieDB.movies[LastFilm] = level;
    } else {
        i--;
    }
}*/
let i=0;
/*while(i<2)
{
    let LastFilm = prompt("Один из последних просмотренных фильмов?", '');
    let level = +prompt('На сколько оцените его? (0-10)', '0');
    if (LastFilm != '' && LastFilm !== null && LastFilm.length < 50 &&
        level != '' && level !== null) {
        personalMovieDB.movies[LastFilm] = level;
    } else {
        i--;
    }
    i++;
}*/
do
{
    let LastFilm = prompt("Один из последних просмотренных фильмов?", '');
    let level = +prompt('На сколько оцените его? (0-10)', '0');
    if (LastFilm != '' && LastFilm !== null && LastFilm.length < 50 &&
        level != '' && level !== null) {
        personalMovieDB.movies[LastFilm] = level;
    } else {
        i--;
    }
    i++;
}while(i<2);




if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
