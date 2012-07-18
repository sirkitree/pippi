var freckle = require("freckle");

// Add subdomain and token information here
// leaving this blank will keep API test account information
freckle("lullabot", "j40j66ham58pcfr8bxvj24x7y9rh1or");

freckle.users.list(function( err, users ) {
  console.log( users );
});

// freckle.users.show(<id>, function( err, user ) {
//   console.log( user );
// });

freckle.tags.list(function( err, tags ) {
  console.log( tags );
});

// freckle.users.token({ auth: [ "<email address>", "<password>" ] }, function( err, token ) {
//   console.log( token );
// });

// freckle.entries.add({
//   'entry': {
//     'minutes': "<time>"
//   , 'user': "<email address>"
//   , 'project_id': <project id>
//   , 'description': '<tag>'
//   , 'date': freckle.date( <date object> )
//   }
// }, function( err, data ) {
//   console.log( err, data );
// });

freckle.projects.list(function( err, projects ) {
  console.log( projects );
});
