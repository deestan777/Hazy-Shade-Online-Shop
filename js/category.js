var xhr = new XMLHttpRequest(); // создаем XML функцию
var products;
var product = document.createElement('div');
var productsAll = document.getElementById('products');
var pdp = document.getElementById('pdp');
var slideWrapper = document.querySelector('.images'); 
var categoryLinks = document.querySelector('.links');
var productItem;


categoryLinks.addEventListener('click',function(event){
    var target = event.target;
    localStorage.setItem('category',target.innerHTML);
});

xhr.open('GET', './js/JSON/products.json', true); // метод, путь, асинхронно синхронно
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
        if(location.pathname=='/html/category-all.html'){
        productsAll.appendChild(product);
            } 
        }
        slideWrapper.innerHTML +=`<a class="slide" href="../html/pdp.html?${products[i].id}"><li><img src="${products[i].mainImage}"></li></a>`;
    }
    if(location.pathname=='/html/pdp.html'){
      productItem = `
  <div class="product-pics">
  <img class="main-image" src="${products[idKey].mainImage}" />
  <ul>
  <li><img class="secondary-image" src="${products[idKey].mainImage}" /></li>
  <li><img class="secondary-image" src="${products[idKey].images[0]}" /></li>
  <li><img class="secondary-image" src="${products[idKey].images[1]}" /></li>
  </ul>
  </div>
  <div class="title-description">
  <h2 class="heading2">${products[idKey].title}</h2> 
  <h3 class="subheader1">${products[idKey].description}</h3>
  <h3 class="heading2 pricepdp">${products[idKey].price} ${products[idKey].currency}</h3>
  <h3 class="subheader2">




  

  
  <label class="container">${products[idKey].size[0]}
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark"></span>
  </label>
  <label class="container">${products[idKey].size[1]}
  <input type="radio" name="radio">
  <span class="checkmark"></span>
  </label>
  <label class="container">${products[idKey].size[2]}
  <input type="radio" name="radio">
  <span class="checkmark"></span>
  </label>
  <label class="container">${products[idKey].size[3]}
  <input type="radio" name="radio">
  <span class="checkmark"></span>
  </label>
  <label class="container">${products[idKey].size[4]}
  <input type="radio" name="radio">
  <span class="checkmark"></span>
  </label>
  

  
  </h3>  
  </div>
  `;
      pdp.innerHTML += productItem;


  }  
  } 
