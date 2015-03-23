angular.module('qb.controllers', [])

.controller('ActivityCtrl', function($scope) {})

.controller('TicketsCtrl', function($scope, Tickets) {
  $scope.tickets = Tickets.all();
  $scope.remove = function(ticket) {
    Tickets.remove(ticket);
  }
})

.controller('TicketDetailCtrl', function($scope, $stateParams, Tickets) {
  $scope.ticket = Tickets.get($stateParams.ticketId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
