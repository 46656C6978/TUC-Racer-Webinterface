# TUC-Racer Biernterface
Nothing to say so far.
Please use [![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard) to lint your commits.

# agenda
+ getting started

# faq
+ how to get started?
    + install `node` and `npm`
    + clone this repo
    + install dependencies: `npm install`
    + start node: `node app.js` (you may also use one of the run scripts provided)
    + open browser on `127.0.0.1:3000`

+ how do I ensure that my code complies to `JavaScript Standard Style`?
    + `npm test` will check your code
    + run it via `./node_modules/.bin/standard <your file here>`
    + to autofix what is autofixable, append `--fix`

+ how do the diagrams in the specification work?
    + [PlantUML](http://plantuml.com/).
    + there is an [online editor](https://www.planttext.com/) for plantuml
    + always include `skinparam dpi 400` directly after `@startuml` - we like our diagrams crisp and edgy
