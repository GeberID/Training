'use strict';

let NumberOfFilms;


start();
let personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
rememberMyFilms();
decectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);

//let i=0;
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
/*do
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
*/
function start(){
    NumberOfFilms = +prompt(`How many films do you se?`, '');
    while(NumberOfFilms == '' || NumberOfFilms== null ||  isNaN(NumberOfFilms)){
        NumberOfFilms = +prompt(`How many films do you se?`, '');
    }
}
function rememberMyFilms (){
    for (let i = 0; i < 2; i++) {
        let LastFilm = prompt("Один из последних просмотренных фильмов?", '');
        let level = +prompt('На сколько оцените его? (0-10)', '0');
        if (LastFilm != '' && LastFilm !== null && LastFilm.length < 50 &&
            level != '' && level !== null) {
            personalMovieDB.movies[LastFilm] = level;
        } else {
            i--;
        }
    }
}
function decectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i=1; i<=3; i++)
    {
        personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
    
}

console.log(personalMovieDB.count);
