var xhr = new XMLHttpRequest(); // создаем XML функцию
var products;
var product = document.createElement('div');
var productsAll = document.getElementById('products');
var slideWrapper = document.querySelector('.images');  

xhr.open('GET', '../js/JSON/products.json', true); // метод, путь, асинхронно синхронно
xhr.send();
xhr.onreadystatechange = function(){
    if (this.readyState != 4) return;
    if (this.status !=200) {
        alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
        return;
    }
    products = JSON.parse(xhr.responseText);
    for(var i = 0; i<products.length;i++){

        
        product.innerHTML += `
        <div class="product">
        <img src="${products[i].mainImage}" width="250" height="250" /> 
        <h2 class="heading3">${products[i].title}</h2> 
        <h3 class="subheader2">${products[i].description}</h3>
        <h3 class="subheader1">${products[i].price} ${products[i].currency}</h3> 
        <button class="btn2 spacing">Add</button> 
        </div>
        `
        productsAll.appendChild(product);
        slideWrapper.innerHTML +=`<li><img src="${products[i].mainImage}"></li>`;
    }
}