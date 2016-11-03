angular
  .module('order-ahead')
  .controller('ItemsIndexController', ItemsIndexController);

ItemsIndexController.inject = ['$http', '$routeParams','$location'];

function ItemsIndexController($http, $routeParams, $location) {
  var vm = this;
  vm.newItem = {};

  $http({
    method: 'GET',
    url: '/api/menu'
  }).then(function successCallback(response){
    vm.items = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createItem = function () {
    $http({
      method: 'POST',
      url: '/api/menu',
      data: vm.newItem,
    }).then(function successCallback(response) {
      vm.items.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', data);
    });
  };

  vm.editItem = function (item) {
    $http({
      method: 'PUT',
      url: '/api/menu/'+item._id,
      data: item
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  };

  vm.deleteItem = function (item) {
    $http({
      method: 'DELETE',
      url: '/api/menu/'+item._id
    }).then(function successCallback(json) {
      var index = vm.items.indexOf(item);
      vm.items.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };


}
