const balance = 1240;
let balance = 6666;
balance = 1340;

const userName = 'jan pakhai potas potas';
const weTogether = 'ami' + userName;
console.log(weTogether);
// userName = 'moyna pakhi' //not allowed

const numbers = [45, 23, 89, 60];
// numbers = [99, 145, 3]    // not allowed
numbers.push(555);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}

const student = {roll: 101, name: 'mofiz', job: 'intern'};
student.name = 'Mofazzol';
// student = {name: 'mofazzol'}  //not allowed

