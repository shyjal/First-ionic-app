angular.module('qb.services', [])

.factory('Tickets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tickets = [{
    id: 0,
    name: 'Shaikh',
    content: 'Test ticket 1',
    face: 'https://lh3.googleusercontent.com/-T8mB8-pAClQ/AAAAAAAAAAI/AAAAAAAAAAA/8FqPBi09oeQ/s120-c/photo.jpg'
  }, {
    id: 1,
    name: 'Anuraj',
    content: 'Test ticket 2',
    face: 'https://lh3.googleusercontent.com/-BZGZ8gyR1OI/AAAAAAAAAAI/AAAAAAAAAXQ/A13_s6tHr84/s120-c/photo.jpg'
  }, {
    id: 2,
    name: 'Anuraj',
    content: 'Test ticket 3',
    face: 'https://lh3.googleusercontent.com/-BZGZ8gyR1OI/AAAAAAAAAAI/AAAAAAAAAXQ/A13_s6tHr84/s120-c/photo.jpg'
  }, {
    id: 3,
    name: 'Shaikh',
    content: 'Test ticket 4',
    face: 'https://lh3.googleusercontent.com/-T8mB8-pAClQ/AAAAAAAAAAI/AAAAAAAAAAA/8FqPBi09oeQ/s120-c/photo.jpg'
  }];

  return {
    all: function() {
      return tickets;
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
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tickets = [{
    id: 0,
    name: 'Shaikh',
    content: 'Test',
    face: 'https://lh3.googleusercontent.com/-T8mB8-pAClQ/AAAAAAAAAAI/AAAAAAAAAAA/8FqPBi09oeQ/s120-c/photo.jpg'
  }, {
    id: 1,
    name: 'Anuraj',
    content: 'Test',
    face: 'https://lh3.googleusercontent.com/-BZGZ8gyR1OI/AAAAAAAAAAI/AAAAAAAAAXQ/A13_s6tHr84/s120-c/photo.jpg'
  }, {
    id: 2,
    name: 'Anuraj',
    content: 'Test',
    face: 'https://lh3.googleusercontent.com/-BZGZ8gyR1OI/AAAAAAAAAAI/AAAAAAAAAXQ/A13_s6tHr84/s120-c/photo.jpg'
  }, {
    id: 3,
    name: 'Shaikh',
    content: 'Test',
    face: 'https://lh3.googleusercontent.com/-T8mB8-pAClQ/AAAAAAAAAAI/AAAAAAAAAAA/8FqPBi09oeQ/s120-c/photo.jpg'
  }];

  return {
    all: function() {
      return tickets;
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
});
