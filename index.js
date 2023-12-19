// Code your solutions in this file
function writeCards(names ,event){
for (let i = 0; i < names.length; i++) {

return names.map(name => `Dear ${name}, You have been invited to the ${eventName}.`);}

}

let names = ['John','Jack', 'Ava'];
let eventName = 'Graduationcle';
let invitations = writeCards(names, eventName);

writeCards(["John", "Jack", "Ava"], "Graduation");

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}


countDown(10);
