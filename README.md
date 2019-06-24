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
 - [ ] Test Coverage & Documentation -_-
