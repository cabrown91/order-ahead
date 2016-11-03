angular
  .module('order-ahead')
  .controller('CartsShowController', CartsShowController);

CartsShowController.$inject = ['http', '$routeParams'];

function CartsShowController ($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/carts/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.cart = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createItem = function (item) {
    $http({
      method: 'PUT',
      url:'/api/carts/'+$routeParams.id + "/items" +item._id,
      data: item
    }).then(function successCallback(json) {
      ///don't need to do anything
    }, function errorCallback(response) {
      console.log('There was an error adding to the cart', response);
    });
  };



  vm.deleteItem = function (item) {
    $http({
      method: 'DELETE',
      url:'/api/carts/'+$routeParams.id + "/items" +item._id
    }).then(function successCallback(json) {
      var index = vm.cart.items.indexOf(item);
      vm.cart.items.splice(index, 1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };



}
