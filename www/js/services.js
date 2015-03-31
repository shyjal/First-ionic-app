angular.module('qb.services', [])

.factory('Tickets', function($http) {

        var tickets=[];
        var promise;

        return {
            all: function() {
                
                promise=$http.get('/data/tickets.json').
                  success(function(data, status, headers, config) {
                    tickets=data;
                    return tickets;

                  }).
                  error(function(data, status, headers, config) {
                    
                  });
                  return promise;
            },
            add: function(data) {
                data.id=tickets[0].id+1;
                tickets.unshift(data);
            },
            remove: function(ticket) {
                console.log(ticket);
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
    .factory('Activities', function($http) {

        var activities= [];
        var promise;

        return {
            all: function() {
                promise=$http.get('/data/activities.json').
                  success(function(data, status, headers, config) {
                    activities=data;
                    return activities;

                  }).
                  error(function(data, status, headers, config) {
                    
                  });
                return promise;
            },
            add: function(data) {
                data.id=activities[0].id+1;
                activities.unshift(data);
            },
            remove: function(ticket) {
                activities.splice(activities.indexOf(ticket), 1);
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