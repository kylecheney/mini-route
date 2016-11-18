angular.module("miniRouting").controller("productsCtrl", function ($scope, $stateParams, productsService) {

  var theState = $stateParams.id;

  if(theState === 'shoes') {
    $scope.productData = productsService.shoeData;
  }
  else if(theState === 'socks') {
    $scope.productData = productsService.sockData;
  }

})
