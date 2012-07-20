# Ginger
_'Cuz gingers have freckles._

Basic command line tool for logging hours in [let's freckle](http://letsfreckle.com). Uses the excellent [freckle api bindings](https://github.com/tbranyen/nodefreckle) from the Node.js library created by Tim Branyan [@tbranyen](http://twitter.com/tbranyen)

## Setup
Currently you need to manually edit ./lib/cli.js and uncomment this line:
`// freckle( "<your subdomain here>", "<your token here>" );` modifying it with your subdomain and token.

@todo:
I'd like to use a basic config tool that will keep this in a separate file.

## Basic Usage
`ginger log -p 101814 -m "quick update" -t 15m`

## Commands

### `list`
 * list projects, displaying the names
 * @todo: get this into a file for autocompletion

### `log`
 * uses various options to log time entries
**Options**
```
--project | -p
    The project ID.
    ex: 101814
    @todo: accept project name and correlate to id for final send.
--message | -m
    The time log description. Surround in double quotes if spaces.
    ex: tag - "tag, tag" - "tag description"
--time | -t
    Time entry.
    ex: 15m - 1.5h
--date | -d
    Optional date formated in YYYY-MM-DD. Defaults to today.
    ex: 2012-07-20
```