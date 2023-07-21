function reverseString(str) {
    let reverseStr = str.split('').reverse().join('');
    console.log(reverseStr)
}
reverseString('hello')

function convertCase (name){
    let convertedCase = name.toUpperCase;
    return convertedCase
}
let myName = convertCase(david);

console.log(convertCase(david))

//Creating Objects

let firstStudent = {
    fname: 'Ebenezer',
    lname: 'David',
    level: 300,
    age: 25,
    hobbies: ['football', 'politics', 'netflix', 'chills'],
    $subject: {
        Course: 'Java',
        Year: 200
    }
}
console.log(firstStudent.lname);
console.log(firstStudent['lname']);
console.log(firstStudent)

//adding or updating properties

firstStudent['Phone number'] = '09087675744'

firstStudent ['nationallity'] = 'nigerian'


console.log(firstStudent);

let studentDetails1 = {
    fname: 'David',
    lname: 'Samuel',
    age: 25,
   'phone number' : '09087675744'
}

function studentData (studentInfo) {
    let intro = `Welcome ${studentInfo.fname} ${studentInfo.lname}, you are ${studentInfo.age} and your phone number is ${studentInfo['phone number']}`
    console.log(intro)          
    }
studentData(studentDetails1)

const firstStudent1 = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    subject: {
        name: 'JavaScript',
        code: 'js101',
        passmark: 85,
        instructor: {
            name:'Ebenezer',
            id: 'GMC22',
            stack: ['html', 'css', 'javascript', 'react', 'mongodb']
        }
    }
}
let stack = firstStudent1.subject.instructor.stack;
// console.log(stack);

for (let i = 0; i < stack.length; i++);
console.log(stack[i]);

let studentInfo =  {
    fname: 'Wale',
    lname: 'Emen',
    age: 25,
    level: 300,
    fullName: function() {
        console.log(`Welcome ${this.fname} ${this.lname}, your age is ${this.age} and you are in ${this.level} level`)
    }
};
studentInfo.fullName()

var person = {
        name: "Peter",
        age: 28,
        gender: "Male",
        displayName: function() {
            alert(this.name);
        }
}
console.log(person)

let numberSets = {
    100: 'One Hundred',
    16: 'Sixteen',
};

console.log([100])

console.log([16])

const carIdentity = {};

carIdentity.name = 'Toyota'
carIdentity['model'] = 'Camry'
carIdentity.quantity = 0
carIdentity['year of production'] = 2013
carIdentity['color'] = 'Red'

console.log(carIdentity);

// let newFigure = parseInt(prompt('Enter quantity'))
// carIdentity.quantity += newFigure;
    console.log(carIdentity)

carIdentity['year of production']++;

console.log(carIdentity);

// let userColor = prompt('Enter prefered color');

// carIdentity.color = userColor;

console.log(carIdentity);

//OBJECTS OF OBJECTS

const shoppingCart = [{
    product: 'PS2 extra',
    price: 123.5,
    quantity: 2
},
{
    product: 'Biscuits',
    price: 30.2,
    quantity: 10
},
{
    product: 'Wirst Watch',
    price: 70.76,
    quantity: 3
}
];

console.log(shoppingCart);

let student = {
    firstName: 'Ebuka',
    lastName: 'Israel',
    age: 23,
    level: 300,
    nationality: 'Nigerian',
    hobbies: ['volleyball', 'music', 'reading'],
    examScores: {
        assessement: 16,
        midterm: 12,
        final: 48,
    }
};

console.log(student);



const math = {
    add: function(x, y) {
        return x + y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    square: function(x) {
        return x * x;
    }, 
    exponential: function (x, y) {
        return x**y;
    }
};
console.log(math.exponential(3, 3));

const person = {
    fname: 'Peter',
    lname: 'Lyn'
};

person['age'] = 30;
person['nationality'] = 'Nigerian'
let version = (`I am ${person.fname} ${person.lname} a ${person.age} year old ${person.nationality}`);

console.log(version)

const studentName = {
    surName: 'Esomchi',
    fname: 'Ebenezer',
    middleName: 'Chinemerem',
    age: 36,
    nationality: 'Nigerian',
    fullDetails() {
        // return (this.middleName) + ' ' + (this.fname)
        return (`I am Mr. ${this.surName} ${this.fname} ${this.middleName} a ${this.age} year old ${this.nationality}`)
    }     
};
console.log(studentName.fullDetails());


const personStats = {
    firstName: 'James',
    lastName: 'Verdy',
    nickName: 'JV',
        fullName () {
            const {firstName, lastName, nickName} = this;
        console.log(`${firstName} ${lastName} ${nickName}`);
        }
}
personStats.fullName();

let txt = 'Hello';

txt += ' World!'

console.log(txt);

