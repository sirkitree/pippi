# Pip
_'Cuz Pippi has freckles._

Basic command line tool for logging hours in [Freckle](http://letsfreckle.com). Uses the excellent [freckle api bindings](https://github.com/tbranyen/nodefreckle) from the Node.js library created by Tim Branyan [@tbranyen](http://twitter.com/tbranyen).

## Setup
You can install this by installing node and npm and then running:

`npm install pip`

Pip reads from a config file, so you'll want to create a ~/.freckle file using the config.json file as a template and then modify each variable to your specific information.

1. `cp config.json ~/.freckle`
1. edit ~/.freckle and use your subdomain, token, and user

Note: your API token can be found by logging into Freckle, clicking on 'settings & tools', and then the API tab.

You'll want to run `pip list` at least once to make sure you're connected properly, and to get a list of all projects which will be saved and used for project id lookups.

## Use
```
Usage: pip [command] [options]

[Commands]
list            List projects associated with your subdomain. This will give
                you a list of project names and their IDs which you need for
                logging your entries.
                  ex: pip list

log             Log time entries using various options.
                  ex: pip log -p 101814 -m "quick update" -t 15m

[Options]
-h, --help      Display this help page.
                  ex: pip -h

-t, --time      Time entry in freckle specified format.
                  ex: pip -t 15m
                  ex: pip -t 1.5h

-p, --project   The project ID.
                  ex: pip -p 101814

-m, --message   Post a message to yammer
                  ex: pip -m "I'm working on pip"
                  ex: pip -m "tag, tag, tag"

-d, --date      Optional date formated in YYYY-MM-DD. Defaults to today.
                  ex: pip -d 2012-07-20

-u, --user      Optional user to log time for. Defaults to user in config.json.
                  ex: pip -u apitest@letsfreckle.com
```

## Todo
* I'd like to have tab completion for project names and tags.
