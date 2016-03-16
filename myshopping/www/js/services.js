angular.module('ionicApp.services', [])

.factory('ItemsApi', function() {
    var total_cart = 0;

    var items = [
        { name: "Milk (1l)", price: 0.85, qty: 0 },
        { name: "Milk (2l)", price: 1.45, qty: 0 },
        { name: "Sliced Loaf (Brown)", price: 0.70, qty: 0 },
        { name: "Sliced Loaf (White)", price: 0.80, qty: 0 },
        { name: "Tea Bags (80)", price: 2.05, qty: 0 }
    ];

    function getTotal() {
        return total_cart;
    }

    function getAllItems() {
        return items;
    }

    function addItem(cartItem) {
        //console.log("cartItem is : " + cartItem);
        //console.log("\n cartItem.name : " + cartItem.name);
        //console.log("\n cartItem.price : " + cartItem.price);

        total_cart = total_cart + cartItem.price;
        cartItem.qty = cartItem.qty + 1; //  or cartItem.qty++;

        console.log("\n cartItem.qty : " + cartItem.qty);
        //console.log("item[0].qty is : " + $scope.items[0].qty); // WOW IT'S REFERENCED BACK
    }

    function removeItem(cartItem) {
        if (cartItem.qty > 0) {
            total_cart = total_cart - cartItem.price;
            cartItem.qty = cartItem.qty - 1;
        } else { alert("This Item is no longer in your basket!"); } //  or cartItem.qty--;
        console.log("\n cartItem.qty : " + cartItem.qty);
    }

    function priceChange(cartItem) {
        //cartItem.price = cartItem.newPrice
        //console.log("\n cartItem.price: " + cartItem.price)
        //console.log("\n cartItem.newprice: " + cartItem.newPrice);
    }

    return {
        getTotal: getTotal,
        all: getAllItems,
        addItem: addItem,
        removeItem: removeItem,
        priceChange: priceChange

    };
});

