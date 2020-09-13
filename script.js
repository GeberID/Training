'use strict';


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt(`How many films do you se?`, '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt(`How many films do you se?`, '');
        }
    },

    rememberMyFilms: function () {
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
    },

    decectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            personalMovieDB.genres[i - 1] =genre;
            if (personalMovieDB.genres[i - 1] !== "" && personalMovieDB.genres[i - 1] !== null) {
                
            }
            else{
                i--;
            }
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.decectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);

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
