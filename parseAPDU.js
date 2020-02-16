(({commands, responses}) => {
function parseAPDU(commands, responses, apdu, callback){
	var lc, le, data;
	var parsed = {}; // Object we will store parsed data in
	parsed.apdu = apdu; // Store the original APDU request so we can respond with it too

  if(apdu.indexOf(" ") <= 0){
    // APDU has no spaces, introduce spaces every 2 chars.
    apdu = chunk(apdu, 2).join(' ');
  }


  if(apdu[0] === "0" && apdu[1] === "x"){
    // Prefixed 0x as per scriptgen, remove the 0x
    apdu = apdu.split("0x").join("");
  }

  parsed.sanitizedAPDU = apdu;

	var bytes = apdu.split(" "); // Split the APDU command up by spaces


	var cla = bytes[0];
	var ins = bytes[1];
	var p1 = bytes[2];
	var p2 = bytes[3];

	if(bytes.length == 2){
		p1 = ins;
    ins = cla;
	}

	// If the length is 5 then the length is the 5th byte
	if(apdu.length === 5){
		le = bytes[4];
	}

	// If the length is more than 5 then find teh data?
	if(apdu.length > 5){
		lc = parseInt(bytes[4]);
		var newLen = parseInt(lc);
		// var lc_int = "0x" + lc; // how it was originally... ?

		if(apdu.length > 5 + lc){
			le = bytes[5+lc] // Needs test coverage..

			data = bytes.splice(5, bytes.length -8); // Remove items we don't want.. in this instance first 4 bytes and last 8..
			data = data.join(" "); // Flatten Data down to string including spaces between each byte

		}else{

			data = bytes.splice(5, bytes.length -6); // Remove items we don't want.. in this instance first 4 bytes and last 6..
			data = data.join(" "); // Flatten Data down to string including spaces between each byte

		}
	}

  // Doing two forEach here is not computationally efficient, but it works.

  // Commands
	commands.forEach(function(command){
  	if(ins === command.code){
			parsed = Object.assign(parsed, command)
			parsed.type = "command";
			if(data){
				parsed.data = data;
			}
			callback(parsed);
		}
	})


	// Responses
	responses.forEach(function(response){
	  if(ins === response.SW1){
			if(p1 === response.SW2){
			parsed = Object.assign(parsed, response)
			parsed.type = "response";
			if(data){
				parsed.data = data;
			}
			callback(parsed);
		}
		}
	})

}


function chunk(str, n) {
  var ret = [];
  var i;
  var len;

  for(i = 0, len = str.length; i < len; i += n) {
     ret.push(str.substr(i, n))
  }

  return ret
};


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = parseAPDU.bind(null, commands, responses);
}else{
	window.parseAPDU = parseAPDU.bind(null, commands, responses);
}
})('window' in globalThis ? window.parseAPDU : {commands: require('./commands'), responses: require('./responsens')});

