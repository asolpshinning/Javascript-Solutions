
//define your object and pretend you don't know the names of the functions in it

let myObject = {
  doSth: (arg) => {console.log(`I am doing something`, arg)},
  writeNew: (arg) => {console.log(`I only write new things`)},
}

//const func = myObject.doSth;
//func('Goodness');

//loop through the object keys (which are functions), and then run the corresponding value (function), if it meets your conditions

for (const f in myObject) {
  if(f == 'doSth') myObject[f]('here')
}
