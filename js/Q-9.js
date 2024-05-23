
let number = 46;
document.getElementById("num").innerHTML = (`Number is = ${number}`);

let sum = 0;
let a = 1;


do {
    sum += a;
    a++;
} while (a <= number);


let sumofnumber = document.getElementById("sum").innerHTML = (`The sum of Numbers = ${sum}`);

