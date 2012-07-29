# Pippi
_'Cuz Pippi has freckles._

Basic command line tool for logging hours in [Freckle](http://letsfreckle.com). Uses the excellent [freckle api bindings](https://github.com/tbranyen/nodefreckle) from the Node.js library created by Tim Branyan [@tbranyen](http://twitter.com/tbranyen).

## Setup
You can install this by installing node and npm and then running:

`npm install pippi -g`

Pip reads from a config file, so you'll want to create a ~/.freckle file with the following information and then modify each variable to your specific information.

```json
{
    "subdomain": "apitest.letsfreckle.com",
    "token": "lx3gi6pxdjtjn57afp8c2bv1me7g89j",
    "user": "apitest@letsfreckle.com"
}
```

Note: your API token can be found by logging into Freckle, clicking on 'settings & tools', and then the API tab.

You'll want to run `pippi list` at least once to make sure you're connected properly, and to get a list of all projects which will be saved and used for project id lookups.

## Use
```
Usage: pippi [command] [options]

[Commands]
list            List projects associated with your subdomain. This will give
                you a list of project names and their IDs which you need for
                logging your entries.
                  ex: pippi list

log             Log time entries using various options.
                  ex: pippi log -p 101814 -m "quick update" -t 15m

[Options]
-h, --help      Display this help page.
                  ex: pippi -h

-t, --time      Time entry in freckle specified format.
                  ex: pippi -t 15m
                  ex: pippi -t 1.5h

-p, --project   The project ID.
                  ex: pippi -p 101814

-m, --message   Post a message to yammer
                  ex: pippi -m "I'm working on pippi"
                  ex: pippi -m "tag, tag, tag"

-d, --date      Optional date formated in YYYY-MM-DD. Defaults to today.
                  ex: pippi -d 2012-07-20

-u, --user      Optional user to log time for. Defaults to user in config.json.
                  ex: pippi -u apitest@letsfreckle.com
```

## Todo
* I'd like to have tab completion for project names and tags.
