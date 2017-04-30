Android pattern unlock
======================

## Rules
- at minimum 4 dots have to be used
- at maximum 9 dots can be used
- one dot can be used only once
- the order in which the dots are connected matters (thus making it a directed graph)
- dots are connected with a straight line meaning that all points on the path of the line get connected

## How to run
### Download dependencies

```
$ npm install
$ bower install
```

### Run in development

```
$ gulp
```

    1. When you open the app at the firs time, it will ask you to input a pattern.
    2. After the first setup of the pattern, it will store the pattern in the browser's localStorage.
    3. Anytime you can unlock the screen against the saved pattern in the browser or you can reset the pattern. 

### Tests

Tested in chrome, firefox, and safari in Mac OSX as well as Chrome and Safari iOS browsers. I haven't tested it in Android OS because I only have an iPhone.
