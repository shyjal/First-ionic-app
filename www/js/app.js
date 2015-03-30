
angular.module('qb', ['ionic', 'qb.controllers', 'qb.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider


  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })



  .state('tab.activity', {
    url: '/activity',
    views: {
      'tab-activity': {
        templateUrl: 'templates/tab-activity.html',
        controller: 'ActivityCtrl'
      }
    }
  })

  .state('tab.tickets', {
      url: '/tickets',
      views: {
        'tab-tickets': {
          templateUrl: 'templates/tab-tickets.html',
          controller: 'TicketsCtrl'
        }
      }
    })
    .state('tab.ticket-detail', {
      url: '/ticket/:ticketId',
      views: {
        'tab-tickets': {
          templateUrl: 'templates/ticket-detail.html',
          controller: 'TicketDetailCtrl'
        }
      }
    })
    .state('tab.activity-detail', {
      url: '/activity/:activityId',
      views: {
        'tab-activity': {
          templateUrl: 'templates/activity-detail.html',
          controller: 'ActivityDetailCtrl'
        }
      }
    })



  $urlRouterProvider.otherwise('/tab/activity');

});
