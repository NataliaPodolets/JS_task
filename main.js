
//let list = JSON.stringify(name); 

let arr = [];
let list = [
    { id: "vdf", name: 'Nat' },
    { id: "kl", name: 'Vas' },
    { id: "dss", name: 'Pet' }
]
let b;
let range = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < 5; i++) {
    b = range.charAt(Math.floor(Math.random() * range.length));
    arr.push(b);
}

console.log(arr)



console.log('start');
var rez1 = document.getElementById('btn1');
var rez2 = document.getElementById('btn2');
var rez3 = document.getElementById('btn3');
var rez4 = document.getElementById('btn4');
var rez5 = document.getElementById('btn5');

var text = '';

function start_click() {

    text1 = arr[0];
    text2 = arr[1];
    text3 = arr[2];
    text4 = arr[3];
    text5 = arr[4];

    rez1.innerHTML = text1;
    rez2.innerHTML = text2;
    rez3.innerHTML = text3;
    rez4.innerHTML = text4;
    rez5.innerHTML = text5;

}


function start_click1() {

    var result = list.find(person => person.name.startsWith(text1.toUpperCase()));
    console.log(result)
}