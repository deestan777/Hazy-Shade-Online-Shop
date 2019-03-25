var xhr = new XMLHttpRequest(); // создаем XML функцию
var users;
var list = document.createElement('ul');

xhr.open('GET', './js/products.json', true); // метод, путь, асинхронно синхронно
xhr.send();
xhr.onreadystatechange = function(){
    if (this.readyState != 4) return;
    if (this.status !=200) {
        alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
        return;
    }
    users = JSON.parse(xhr.responseText);
    for(var i = 0; i<users.length;i++){
        var listItem = document.createElement('li');
        listItem.innerHTML = 
        users[i].title + 
        users[i].description + 
        users[i].mainImage + 
        users[i].images;
        list.appendChild(listItem)
    }
    document.body.appendChild(list);
}





function renderBooks(books){
    var booksElem =  document.createElement('div');
    books.forEach(function(book){
    booksElem.innerHTML += Book(book);
    });

    document.querySelector('.books').innerHTML = booksElem.innerHTML;
}

function renderBookWithMap(array) {
    document.querySelector('.books').innerHTML = array.map(Book).join;
}

function Book(book) {
    return `
<div class="books__item book">

    <img src="${book.imageUrl}" alt="" class="book__cover">

    <h2 class="book__title">
        ${book.title}
    </h2>

    <h3 class="book__subtitle">
        ${book.author} / ${book.releaseDate}
    </h3>

    <p class="book__description">
    Rating: 
    <span class="book__rating">
        ${book.rating}
    </span>
    </p>

    <p class="book__price price">Price: 
    <span class="price__amount">
        ${book.price}
    </span>
    <span class="price__currency">
        ${" " + book.currency}
    </span>
    </p>

    <div class="book__controls">
        <span class="book__btn add-to-cart-btn">
        Add to cart
        </span>
    </div>
</div>`;
}

renderBooks(books);
