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
  data.missing = new Array();

  if (opt._.length === 0) {
      opt._ = null;
  }

  opt.project = opt.project || opt.p;
  opt.message = opt.message || opt.m;
  opt.time = opt.time || opt.t;
  opt.date = opt.date || opt.d

  // --project | -p
  if (opt.project == null) {
    data.missing.push('project');
  }

  // --message | -m
  if (opt.message == null) {
    data.missing.push('message');
  }

  // --time | -t
  if (opt.time == null) {
    data.missing.push('time');
  }

  // --date | -d
  if (opt.date == null) {
    var current = new Date();
    opt.date = freckle.date(current);
  }
  // else { @todo: validate format if date is given }

  if (data.missing.length == 0) {
    // if we have all of the params then create an entry
    console.log('required data collected');
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
    console.log("missing " + data.missing);
  }

};
run_ginger();