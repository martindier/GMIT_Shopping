angular.module('ionicApp.controllers', [])

.controller('PricesCtrl', function($scope, ItemsApi) {
    $scope.total_cart = 0;

    $scope.items = ItemsApi.all();

    $scope.addItem = function(cartItem) {
        ItemsApi.addItem(cartItem);
        $scope.total_cart = ItemsApi.getTotal();
    };

    $scope.removeItem = function(cartItem) {
        ItemsApi.removeItem(cartItem);
        $scope.total_cart = ItemsApi.getTotal();
    };
})

.controller('ShoppingCtrl', function($scope, ItemsApi) {
    $scope.items = ItemsApi.all();
});

