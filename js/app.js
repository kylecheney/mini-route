angular.module("miniRouting", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: './home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('products', {
      url:'/products/:id',
      templateUrl: './products/productsTmpl.html',
      controller: 'productsCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: './settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    });

  $urlRouterProvider
    .otherwise('/');

});
