'strict mode'

//object creator
function createMyObject(){
    return{ 
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello(){
            return 'hello';
    }
  }
}
//console.log(createMyObject());

//object updater
function updateObject(obj){
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';

    return obj;
}

//self-ref
function personMaker(){
    let person = {
        firstName: 'Paul',
        lastName: 'Jones',
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
    };
    return person;
}
//console.log(personMaker().fullName());

//Deleting keys
const sampleObj = { 
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
};

function keyDeleter(obj){
    delete obj.foo;
    delete obj.bar;
    return obj;
}

//student reports
function makeStudentsReport(data) {
    const studentResults = [];
      for (let i = 0; i < data.length; i++) {
      const item = data[i];
      studentResults.push(`${item.name}: ${item.grade}`);
    }
    return studentResults;
  }

  //summer school
  const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
      for (let i = 0; i<students.length; i++ ){
          return students[i].status = 'In Summer school';
      }
}
  
//find by ID
const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
function findById(items, idNum){
    for (let i=0; i<items.length; i++){
        if (items[i].id === idNum){
            return items[i];
        }
    }
}
//console.log(findById(scratchData, 22));

//validate object keys
const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
      let keys = Object.keys(object);
    for (let i = 0; i < object.length; i++){
        if (keys[i] === expectedKeys[i] && keys.length === expectedKeys.length){
        return true; }
        
        else {
            return false;
        }
    }
}
  