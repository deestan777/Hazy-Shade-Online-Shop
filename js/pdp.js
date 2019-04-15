let idKey = location.search.slice(1);
var itemsInCart =[];

var jqxhr = $.getJSON( "../js/JSON/products.json", function(itemData) {
    console.log( "success" );
    itemsInCart.push(itemData[idKey]);
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
 



