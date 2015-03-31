angular.module('qb.controllers', [])

.controller('ActivityCtrl', function($scope, Activities, $state, $ionicActionSheet, $timeout) {


    Activities.all().then(function(d) {
        $scope.activities = d.data;
    });

    $scope.showAction = function(clicked) {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: 'View details'
            }],
            destructiveText: 'Delete',
            titleText: 'Activity',
            cancelText: 'Cancel',

            buttonClicked: function(index) {
                $state.go('tab.activity-detail', {
                    activityId: clicked.id
                })
                return true;
            },
            destructiveButtonClicked: function() {
                Activities.remove(clicked);
                return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 2000);

    };

    $scope.addActivity = function(actName) {

        if (actName) {
            var m_names = new Array("Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul", "Aug", "Sep",
                "Oct", "Nov", "Dec");
            var date = new Date();
            var data = {
                date: date.getDate() + ' ' + m_names[date.getMonth()] + ' ' + date.getFullYear(),
                content: actName
            };
            Activities.add(data);
        }
    };

})

.controller('TicketsCtrl', function($scope, Tickets, $ionicModal) {


    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.addTicket = function(ticket) {

        if (ticket.content != '') {

            var data = {
                assign: ticket.assign,
                content: ticket.content,
                priority: ticket.priority,
                face: ticket.assign === 'Anuraj' ? 'https://lh3.googleusercontent.com/-BZGZ8gyR1OI/AAAAAAAAAAI/AAAAAAAAAXQ/A13_s6tHr84/s120-c/photo.jpg' : 'https://lh3.googleusercontent.com/-T8mB8-pAClQ/AAAAAAAAAAI/AAAAAAAAAAA/8FqPBi09oeQ/s120-c/photo.jpg'
            };
            Tickets.add(data);
            $scope.modal.hide();
        }
    };

    Tickets.all().then(function(d) {
        $scope.tickets = d.data;
    });

    $scope.remove = function(ticket) {
        Tickets.remove(ticket);
    }
})

.controller('TicketDetailCtrl', function($scope, $stateParams, Tickets) {
        $scope.ticket = Tickets.get($stateParams.ticketId);
})
.controller('ActivityDetailCtrl', function($scope, $stateParams, Activities) {
        $scope.activity = Activities.get($stateParams.activityId);
 });