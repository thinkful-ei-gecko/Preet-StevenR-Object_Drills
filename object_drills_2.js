'strict mode'
//initializers and methods

const loaf = {
    flour: 300,
    water: 210,
    hydration(){
        return (this.water/this.flour)*100;
    }
}
//console.log(loaf.hydration());

//iterating over object's properties

const object = {
    foo: 'bizz',
    bar: 'bang',
    fum: 'fee foo',
    quux: 32,
    spam: 'denied'
}

let key = "";
for (let key in object){
    //console.log(`${key}: ${object[key]}`);
}

//Arrays in objects
const meals = {
    meal: ['breakfast', 'second breakfast', 'eleveness', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
//console.log(meals.meal[3]);

//Arrays in  objects and properties that aren't there 

const myArray = [
    {name: 'Preet', jobTitle: 'Web Developer', boss: "Myself"},
    {name: 'Bob', jobTitle: 'Surgeon', boss: "Dave"},
    {name: 'Simon', jobTitle: 'Process Engineer'},
];

function array (myArray){
    for (let i = 0; i < myArray.length; i++){
        if('boss' in myArray[i]){
            console.log(`${myArray[i].jobTitle} ${myArray[i].name} reports to ${myArray[i].boss}`);
            }
            else {console.log(`${myArray[i].jobTitle} ${myArray[i].name} doesn't report to anybody.`);
            }
    }
}
//array(myArray);

//cracking the code

function decode(string, object) {
  let result = [];
  let array = string.split(' ');
  for (let i = 0; i < array.length; i++) {
    for (let key in object) {
      if (array[i][0] === key) {
        result.push(array[i][object[key] - 1]);
      }
    }
  }
  return result;
}
const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };
 let decoder = 'craft block argon meter bells brown croon droop';
//console.log(decode(decoder, cipher));

//lotr factory functions
function createCharacter(name, nickname, race, origin, attack, defense){
    return {
        name, 
        nickname, 
        race, 
        origin, 
        attack, 
        defense,
        describe(){
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
        },
        evaluateFight(character){
            
        }

    }

}