/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */







// 1

const imgs = document.querySelectorAll('.promo__adv img')


imgs.forEach(img => {
    if (img) {
        img.remove()
    }
})

// 2

document.querySelector('.promo__genre').innerHTML = "ДРАМА"

// 3

const promo_bg = document.querySelector('.promo__bg')

if (promo_bg) {
    promo_bg.style.background = 'url("./img/bg.jpg") center center/cover no-repeat'
}

// 4

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-Ла Лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const list = document.querySelectorAll('.promo__interactive-item')



list.forEach((movie, idx) => {
    movie.innerText = `${idx+1}. ` + movieDB.movies.sort()[idx]
})




