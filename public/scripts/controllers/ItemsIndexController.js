angular
  .module('order-ahead')
  .controller('ItemsIndexController', ItemsIndexController);

ItemsIndexController.inject = ['$http'];

function ItemsIndexController($http) {
  var vm = this;
  vm.newItem = {};

  $http({
    method: 'GET',
    url: '/api/menu/'
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












































}
