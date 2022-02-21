const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho cino";
const kobita = `kobita tumi sopno charini`;
const multiLine = 'This is my first line \n' + 
'this is my second line \n'+
'third line text here \n'+
'fourth line text here'
// console.log(multiLine);
const multiLineNew = `this is multiline
this is second line
this is third
this is fourth line`;


const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class = "friend-name">Friend-5</h3>'
const old2 = '<h3 class = "friend-name">Friend- '+ count +'</h3>';
const old2 = '<h3 class = "friend-name">Friend-${count.}</h3>';
const new1 = `<h3 class = "friend-name">Friend-${friends.length}</h3>`;

console.log(new1);

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = first + ' ' + last;
const fullNew = `${first} ${last}`;