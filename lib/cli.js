var freckle = require('freckle')
  , opt = require('optimist').argv
  , ConfigObj = require('./config')
  , config = new ConfigObj()
  , data
  , project_names = new Array();

// Add subdomain and token information here. Leaving this blank will keep API
// test account information.
// @todo: get this into a config file
console.log(config);
freckle( config.subdomain, config.token );

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

    // 'help' command

    if (command == 'help') {

      var help = 'Usage: ginger [command] [options]'+
      '\n[Commands]'+
      '\n\tlist\t\tList project associated with your subdomain.'+
      '\n\t\t\t  ex: ginger list'+
      '\n\tlog\t\tLog time entries using various options.'+
      '\n\t\t\t  ex: ginger log -p 101814 -m \"quick update\" -t 15m'+
      '\n[Options]'+
      '\n\t-h, --help\tDisplay this help page.'+
      '\n\t\t\t  ex: ginger -h'+
      '\n\t-t, --time\tTime entry in freckle specified format.'+
      '\n\t\t\t  ex: ginger -t 15m'+
      '\n\t\t\t  ex: ginger -t 1.5h'+
      '\n\t-p, --project\tThe project ID.'+
      '\n\t\t\t  ex: ginger -p 101814'+
      '\n\t-m, --message\tPost a message to yammer'+
      '\n\t\t\t  ex: ginger -m "I\'m working on ginger"'+
      '\n\t\t\t  ex: ginger -m "tag, tag, tag'+
      '\n\t-d, --date\tOptional date formated in YYYY-MM-DD. Defaults to today.'+
      '\n\t\t\t  ex: ginger -d 2012-07-20'+
      '\n\t-u, --user\tOptional user to log time for. Defaults to user in config.json.'+
      '\n\t\t\t  ex: ginger -u apitest@letsfreckle.com';
      console.log( help );
    }

    // 'list' command

    if (command == 'list') {
      freckle.projects.list(function( err, projects ) {
        if(err) {
          console.log(err);
        }
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
      opt.user = opt.user || opt.u;

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

      // --user | -u

      if (opt.user == null) {

        // Load user from config.
        if (config.user !== null) {
          opt.user = config.user;
        }
        else {
          data.missing.push('user');
        }

      }

      if (data.missing.length == 0) {

        // If we have all of the params then create an entry

        freckle.entries.add({
          'entry': {
            'minutes': opt.time
          , 'user': opt.user
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

};
run_ginger();