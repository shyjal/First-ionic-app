angular.module('qb.services', [])

.factory('Tickets', function() {

        var tickets = [{
            id: 3,
            assign: 'Shaikh',
            content: 'Test ticket 1',
            priority: 10,
            face: 'https://lh3.googleusercontent.com/-T8mB8-pAClQ/AAAAAAAAAAI/AAAAAAAAAAA/8FqPBi09oeQ/s120-c/photo.jpg'
        }, {
            id: 2,
            assign: 'Anuraj',
            content: 'Test ticket 2',
            priority: 6,
            face: 'https://lh3.googleusercontent.com/-BZGZ8gyR1OI/AAAAAAAAAAI/AAAAAAAAAXQ/A13_s6tHr84/s120-c/photo.jpg'
        }, {
            id: 1,
            assign: 'Anuraj',
            content: 'Test ticket 3',
            priority: 8,
            face: 'https://lh3.googleusercontent.com/-BZGZ8gyR1OI/AAAAAAAAAAI/AAAAAAAAAXQ/A13_s6tHr84/s120-c/photo.jpg'
        }, {
            id: 0,
            assign: 'Shaikh',
            content: 'Test ticket 4',
            priority: 7,
            face: 'https://lh3.googleusercontent.com/-T8mB8-pAClQ/AAAAAAAAAAI/AAAAAAAAAAA/8FqPBi09oeQ/s120-c/photo.jpg'
        }];

        return {
            all: function() {
                return tickets;
            },
            add: function(data) {
                data.id=tickets[0].id+1;
                tickets.unshift(data);
            },
            remove: function(ticket) {
                tickets.splice(tickets.indexOf(ticket), 1);
            },
            get: function(ticketId) {
                for (var i = 0; i < tickets.length; i++) {
                    if (tickets[i].id === parseInt(ticketId)) {
                        return tickets[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Activities', function() {

        var activities = [{
            date: '20 Mar 2015',
            content: 'Started building first app'
        }, {
            date: '19 Mar 2015',
            content: 'Installed ionic framework'
        }];

        return {
            all: function() {
                return activities;
            },
            add: function(data) {
                activities.unshift(data);
            },
            get: function(activityId) {
                for (var i = 0; i < activities.length; i++) {
                    if (activities[i].id === parseInt(activityId)) {
                        return activities[i];
                    }
                }
                return null;
            }
        };
    });