/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('order-ahead', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];


function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/items',
      controllerAs: 'itemsIndexCtrl',
      controller: 'ItemsIndexController'
    })
    .when('/menu/:id', {
      templateUrl: '/templates/items-show',
      controllerAs: 'itemsIndexCtrl',
      controller: 'ItemsIndexController'
    })
    .otherwise({
      redirectTo: "/"
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
