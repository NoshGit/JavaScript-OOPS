// This is Factory Function
function createCircle (radius) {
    return {
        radius,
        draw: function () {
            console.log("Draw Circle from Factory Function");
        }
    };
}

const circle = createCircle(1);

//Normal Object Literal Example
const obj = {
  name: 'Noshir',
  age: 34,
  gender: 'M'  
}

//This is a Constructor Function
function Circle (radius){
    this.radius = radius,
    this.draw = function() {
        console.log("Draw Circle from Constructor Function");
    }
}

const another = new Circle(1);

/**Below are Enumeration Examples : Starts */

//Check Keys from Object
for (let key in another){
    console.log(key);
}

//Check keys with values
for (let key in another){
    console.log(key, another[key]);
}

//Check keys with values of only properties and not methods
for (let key in another){
    if(typeof another[key] !== 'function')
    console.log(key, another[key]);
}

//Another Way of getting Keys from Objects
var keys = Object.keys(another);
console.log("Keys = ", keys);

//Check if Object has certain Keys

if('gender' in obj){
    console.log("Object has Key Gender");
}


/**Enumeration Examples : Ends */