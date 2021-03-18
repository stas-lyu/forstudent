// На этой странице можно:
//     • посмотреть список всех книг;
// • добавить новую книгу;
// • изменить существующую книгу;
// • удалить существующую книгу.
//     При просмотре списка всех книг можно осуществлять сортировку и поиск. Сортировать можно по названию, по имени автора
// или по количеству экземпляров в библиотеке. Для поиска пользователь вводит часть слова, и проверка происходит по наличию
// этой части в названии книги или в имени автора или в названии
// издательства.
//     При добавлении или изменении книги необходимо валидировать данные: все поля обязательны для заполнения и в числовых
// полях не может быть отрицательных значений.
// let books = [];
let addBookBtn = $('#addBook');
let booksArray = [];
let count = null;

if (JSON.parse(localStorage.getItem('booksArray')) == null) {
    booksArray = []
} else {
    booksArray = JSON.parse(localStorage.getItem('booksArray'));
}

class Books {
    constructor(books = booksArray) {
        this.books = books
    }

    addBook(title, auotor, pages) {
        let book = {
            title: title,
            autor: auotor,
            pages: pages
        };
        console.log(this.books);
        this.books.push(book);
        localStorage.setItem('booksArray', JSON.stringify(this.books));
        this.render();
    }

    render() {
        let allBooks = document.querySelector('#allBooks');
        allBooks.innerHTML = '';
        this.books.forEach((item) => {
            count++;
            allBooks.innerHTML += `
            <ul class="book">
            <li>${count}</li>
            <li>${item.title}</li>
            <li>${item.autor}</li>
            <li>${item.pages}</li>
            </ul>
            `
        })
    }
}

addBookBtn.click(() => {
    let title = document.querySelector('#titleBook').value;
    let autor = document.querySelector('#autorBook').value;
    let pages = document.querySelector('#pagesBook').value;
    let book = new Books();
    book.addBook(title, autor, pages);
});

let render = new Books();
render.render();

