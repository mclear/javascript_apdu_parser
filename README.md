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
 - [x] Support APDU outputted from scriptgen IE "0x80 0xB4 0x05 0x00 0x20 0x00 0x03 0x00 0x11 0x01 0x06 0x81 0x08 0x0F 0x03 0x82 0x10 0x02 0x06 0x83 0x01 0x00 0x01 0x82 0x02 0x00 0x06 0x81 0x08 0x0D 0x01 0x00 0x03 0x00 0x06 0x00 0x00 0x7F"
 - [x] Support none space broke APDU IE "9000"
 - [ ] Don't leave commands and responses in global name space =_-

## License
Apache 2
