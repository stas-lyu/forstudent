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
let title = $('#titleBook').value;
let autor = $('#autorBook').value;
let pages = $('#pagesBook').value;
let books = [];
let addBookBtn = $('#addBook');

class Books {
    constructor(books = books, title = title, autor = autor, pages = pages) {
        this.books = books;
        this.title = title;
        this.autor = autor;
        this.pages = pages;
    }
    addBook() {
        let book = {
            title: this.title,
            autor: this.autor,
            pages: this.pages
        };
        this.books.push(book);
    }
}

addBookBtn.click(()=> {
    let book = new Books();
    console.log(book);
    console.log(books)
});

