var freckle = require('freckle')
  , opt = require('optimist').argv
  , data;

// Add subdomain and token information here
// leaving this blank will keep API test account information
// @todo: get this into a config file
freckle( "<your subdomain here>", "<your token here>" );

/**
 * Run Ginger
 *
 * @api private
 */
run_ginger = function() {
  // Collect string passed in with params.
  data = opt._;

  if (opt._.length === 0) {
      opt._ = null;
  }

  opt.project = opt.project || opt.p;
  opt.message = opt.message || opt.m;
  opt.time = opt.time || opt.t;
  opt.date = opt.date || opt.d

  // --project | -p
  if (opt.project) {

  }

  // --message | -m
  if (opt.message) {

  }

  // --time | -t
  if (opt.time) {

  }

  // --date | -d
  if (opt.date) {

  }

  if (opt.minutes && opt.project && opt.description && opt.date) {
    // if we have all of the params then create an entry
    freckle.entries.add({
      'entry': {
        'user': "<email address>"
      , 'minutes': opt.time
      , 'project_id': opt.project
      , 'description': opt.message
      , 'date': freckle.date( opt.date )
      }
    }, function( err, data ) {
      console.log( err, data );
    });
  } else {
    // @todo: if we're missing a param, tell the user which
    console.log("missing x");
  }

};
run_ginger();