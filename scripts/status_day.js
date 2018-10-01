// Description:
//   Enerbot te da un consejo según las frases de la Bola 8 (en español).
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   que tal el dia  - Te dice com va el día

var consejos = [
    ':fire::evilparrot::fire:',
    
  ];
  
  module.exports = function(robot) {
    robot.respond(/que tal el dia/gi, function(res) {
  
      res.send( ':energon: ~ ' + res.random(consejos) );
  
    });
  };