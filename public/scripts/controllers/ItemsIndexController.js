console.log('working!!!');



angular
  .module('order-ahead')
  .controller('ItemsIndexController', ItemsIndexController);

ItemsIndexController.inject = ['$http', '$routeParams','$location'];

function ItemsIndexController($http, $routeParams, $location) {
  var param = $routeParams.id;
  console.log(param);
  var vm = this;
  vm.newItem = {};
  //
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


  $http({
    method: 'GET',
    url: '/api/menu/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.item = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });













































}
