var freckle = require('freckle')
  , opt = require('optimist').argv
  , data
  , project_names = new Array();

// Add subdomain and token information here
// leaving this blank will keep API test account information
// @todo: get this into a config file
// freckle( "<your subdomain here>", "<your token here>" );

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
  } else {

    // Pick up the command.

    command = opt._[0];

    // Display help if no command provided.

    if (command == null) {
      // @todo: display useage
    }

  }

  if (opt._ !== null) {

    // 'list' command

    if (command == 'list') {
      freckle.projects.list(function( err, projects ) {
        for (var i = projects.length - 1; i >= 0; i--) {
          console.log(projects[i].project.name);

          // @todo: save { project_id: "project_name" }
        };
      });
    }

    // 'log' command

    if (command == 'log') {

      opt.project = opt.project || opt.p;
      opt.message = opt.message || opt.m;
      opt.time = opt.time || opt.t;
      opt.date = opt.date || opt.d;
      opt.help = opt.help || opt.h;

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
      } else {
        // @todo: validate format. must be int w/m or h suffix
      }

      // --date | -d

      if (opt.date == null) {
        var current = new Date();
        opt.date = freckle.date(current);
      } else {
        // @todo: validate format if date is given
      }

      if (opt.help) {
        // @todo: explain useage a bit better
        console.log( "ginger log -p 101814 -m \"quick update\" -t 15m")
      }

      if (data.missing.length == 0) {

        // If we have all of the params then create an entry

        freckle.entries.add({
          'entry': {
            'minutes': opt.time
          , 'project_id': opt.project
          , 'description': opt.message
          , 'date': opt.date
          }
        }, function( err, data ) {
          console.log( err, data );
        });

        console.log("Logged " + opt.time + " for " + opt.project);
      } else {
        console.log("missing " + data.missing);
      }

    }
  }

}
run_ginger();