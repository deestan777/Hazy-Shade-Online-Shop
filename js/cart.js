    var item = {
    id: 1,
    size: 43
    };

    var itemsInCart = JSON.parse(localstorage.getItem('cart-items')) || [];
    itemsInCart.push(item);
    
    localstorage.setItem('cart-item', JSON.stringify(itemsInCart));
    
    
    function renderShoppingCart(){ // взять товары с ЛС и нарисовать
    var itemsInCart = JSON.parse(localstorage.getItem('cart-items'));
    var cartContainer = document.querySelector('app');
    
    var itemsHTML =' ';
    
    itemsInCart.forEach(function(item){
    var itemData = findItemInJSON(item.id);
    itemsHTML += `<div>
    <h2>${itemData.title}</h2>
    <h2>${itemData.price}</h2>
    </div>`;
    
    });
    
    cartContainer.innerHTML = itemHTML;
    }
    
    renderShoppingCart();
    
    
    var jsonData = [{
    id: 1,
    title: 'some item',
    price: 56,
    },{
    id: 21,
    title: 'some item',
    price: 5446
    }]
    
    function findItemInJSON(id){
    var itemData = jsonData.filter(function(item){
    return item.id == id;
    });
    return itemData[0];
    }


    itemsInCart.forEach(function(item){
        var itemData = findItemInJSON(item.id);
        itemsHTML += `<div>
        <h2>${itemData.title}</h2>
        <h2>${itemData.price}</h2>
        </div>`;
        
        });