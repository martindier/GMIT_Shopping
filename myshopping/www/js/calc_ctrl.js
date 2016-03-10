// on button press add item value to running total on button swipe minus item value from running total

angular.module('ionicApp', ['ionic'])

.controller('CalcCtrl', function($scope) {

$scope.items = [
  {name: "Milk (1l)", price:0.85 }, 
  {name: "Milk (2l)", price:1.45 },  
  {name: "Sliced Loaf (White)", price:0.70 }, 
  {name: "Sliced Loaf (Brown)", price:0.80 },
  {name: "Sliced Loaf (White)", price:2.05 }];

  $scope.total=77;


});

