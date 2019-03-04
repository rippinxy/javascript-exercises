let degreesC = '-10';
let degreesF = '-100';

const ftoc = function() {
  let convToC = (degreesF - 32) * (5/9);
  let roundedC = Math.round (convToC * 10) / 10;
  return roundedC;
}

const ctof = function() {
  let convToF = (degreesC * (9/5) + 32)
  let roundedC = Math.round (convToF * 10) / 10;
  return roundedC;
}

module.exports = {
  ftoc,
  ctof
}


//Notes

//Fahrenheit to Celcius
//dC = ([dF] - 32) x (5/9)

//Celcius to Fahrenheit
//dF = [dC] x (9/5) + 32