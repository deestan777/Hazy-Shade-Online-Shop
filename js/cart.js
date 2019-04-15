var item = jQuery.parseJSON(localStorage['items-in-cart']);
var cartSpace = document.getElementById('cart-space');
var cartHTML = [];
var removeBtn = document.getElementById('item-id${product.id}');
var subTotal = 0;
var subTotalHtml = document.querySelector('.tabs-total');
var itemsInCart = JSON.parse(localStorage.getItem('cart-items')) || [];
itemsInCart.push(item);


    
    localStorage.setItem('cart-items', JSON.stringify(itemsInCart));
    
    var jqxhr = $.getJSON( "../js/JSON/products.json", function() {
        console.log( "success" );

        for(var i = 0; i < itemsInCart.length; i++){
          var product = itemsInCart[i][0];
         
          subTotal += product.price;
         
          cartHTML +=`

          <tr id="item-id${product.id}">
                <td class="picture">
                <img src="${product.mainImage}" alt="">
                </td> 
                <td class="title-tab">
                <h4 class="heading3">${product.title}</h4> 
                <h3 class="sm-font">${product.description}</h3>
                </td>
                <td class="color-tab">${product.category}</td>
                <td class="size-tab">${product.size[0]}</td>
                <td class="qty-tab">
                <form action="/action_page.php">
                <input type="number" name="quantity" placeholder="1" step="1" min="1" max="99">
                </form>
                </td>
                <td class="amount-tab">${product.price}</td>
                <td class="delete-tab" onclick="document.remove('item-id${product.id}')"><i class="fas fa-backspace"></i></td>
          </tr>`;        

/*
          if(product.id == JSON.parse(localStorage['cart-items'])[i][0].id localStorage['cart-items'] itemsInCart[i][0].id){
            return;
          } else {} */


          cartSpace.innerHTML = cartHTML;
          subTotalHtml.innerText = subTotal + " $";
        }
      })
.done(function() {
  console.log( "second success" );
})
.fail(function() {
  console.log( "error" );
})
.always(function() {
  console.log( "complete" );
});