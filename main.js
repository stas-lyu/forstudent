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

if (JSON.parse(localStorage.getItem('booksArray')) == null) {
    booksArray = []
} else {
    booksArray = JSON.parse(localStorage.getItem('booksArray'));
}

class Books {
    constructor(books = booksArray, title) {
        this.books = books;
        this.title = title;
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

        function iterate(item, index) {
            allBooks.innerHTML += `
            <ul class="book">
            <li>${index + 1}</li>
            <li>${item.title}</li>
            <li>${item.autor}</li>
            <li>${item.pages}</li>
<!--            <li><span onclick="changeBook(${index})">edit</span>-->
                        <li><span>edit</span>
            <span class="delete" onclick="deleteBook(${index})" id="${index}">delete</span>
            </li>
            </ul>
            `
        }

        this.books.forEach(iterate)
    }
}

let book = new Books();

// function changeBook(index) {
//     let obj =  // Обратится к массиву книг по индексу
//
//     obj.title = inputFrom title;
//     obj.title = inputFrom title;
//     obj.title = inputFrom title;
//
//     render();
//
// }

function deleteBook(index) {
    if (index > 0 || index > -1) {
        booksArray.splice(index, 1);
    }

    console.log(booksArray);
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
    book.render()
}

addBookBtn.click(() => {
    let title = document.querySelector('#titleBook').value;
    let autor = document.querySelector('#autorBook').value;
    let pages = document.querySelector('#pagesBook').value;

    book.addBook(title, autor, pages);
});

let render = new Books();
render.render();
