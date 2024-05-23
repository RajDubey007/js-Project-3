let num = 18;
let rem, 
sum = 0;
let len = num; 

let temp = num; 

while (temp > 0) {
    rem = temp % 10;
    sum += (rem, len); 
    temp = (temp / 10);
    len--;
}

if (sum === num) {
    document.getElementById("ans-1").innerHTML = (num + " is a Disarium number");
} else {
    document.getElementById("ans-2").innerHTML = (num + " is not a Disarium number");
}




