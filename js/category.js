var xhr = new XMLHttpRequest(); // создаем XML функцию
var products;
var product = document.createElement('div');
var productsAll = document.getElementById('products');
var slideWrapper = document.querySelector('.images'); 
var categoryLinks = document.querySelector('.links');
var addProduct = document.getElementById('add');
var productItem;


categoryLinks.addEventListener('click',function(event){
    var target = event.target;
    localStorage.setItem('category',target.innerHTML);
});

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
        var category = localStorage.getItem('category');
        if(products[i].category == category){
        productItem = `
        <a href="./pdp.html?${products[i].id}">
        <div class="product">
        <img src="${products[i].mainImage}" width="300" height="300" /> 
        <h2 class="heading3">${products[i].title}</h2> 
        <h3 class="subheader2">${products[i].description}</h3>
        <h3 class="subheader3">${products[i].price} ${products[i].currency}</h3> 
        <button href="" class="btn2 spacing" id="add">Add</button> 
        </div>
        </a>
        `;
        product.innerHTML += productItem; 
        productsAll.appendChild(product);
        }
        slideWrapper.innerHTML +=`<a class="slide" href="../html/pdp.html?${products[i].id}"><li><img src="${products[i].mainImage}"></li></a>`;
    }
}