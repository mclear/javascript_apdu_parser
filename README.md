# Javascript APDU Parser

# Usage

## Web Browser
```
<script src="./parseAPDU.js"></script>

var parsedAPDU = parseAPDU("90 00", function(parsedAPDU){
  console.log(parsedAPDU);
});
```

## NodeJS
```
var parseAPDU = require('./parseAPDU.js')
var parsedAPDU = parseAPDU("90 00", function(parsedAPDU){
  console.log(parsedAPDU);
});
```

## Test coverage
None.

## Head Nod
Python APDU Parser -- https://github.com/eIDuy/apdu-parser

## Todo
 - [ ] Use async/await/promises not callbacks
 - [ ] Use hipster(correct) JS declarations IE let instead of var
 - [ ] Try understand how the whole le change thing works
 - [ ] Test Coverage

## License
Apache 2
