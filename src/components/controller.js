angular.module('app',[
         'ngAnimate',
         'ngRoute',
         'ngSanitize',
         'ngTouch',
         'ui.router',
         'ui.bootstrap',
         'ngStorage',
         'patternUnlock',
       ])
       .config(function($stateProvider, $urlRouterProvider) {
         $urlRouterProvider
           .otherwise('/app/index');

         $stateProvider
           .state('app', {
             abstract: true,
             url: '/app',
             templateUrl: 'components/common/views/index.html',
             controller: 'AppCtrl',
             controllerAs: 'app'
           })
           .state('app.index', {
             url: '/index',
             templateUrl: 'components/common/views/lock.html'
           })
           .state('app.unlock', {
             url: '/unlock',
             templateUrl: 'components/common/views/unlock.html'
           })
       })
       .controller('AppCtrl', [
           'PatternUnlockService',
           '$state',
           '$localStorage',
           function (PatternUnlockService, $state, $localStorage) {
               var vm = this;

               vm.greeting = 'Hello world';

               vm.reset = function() {
                   PatternUnlockService.reset();
               }

               vm.unlock = function() {
                   PatternUnlockService.unlock()
                       .then(function() {// Success
                           $state.go('app.unlock');
                       });
               }

               if (!PatternUnlockService.isRegistered()) {
                   PatternUnlockService.reset();
               }
           }
       ]);
