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


  vm.deleteItem = function (item) {
    $http({
      method: 'DELETE',
      url:'/api/carts/'+$routeParams.id + "/items" +item._id
    })
  }

}
