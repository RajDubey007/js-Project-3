let i = 1;
let sum = 0;

for (i = 1; i <= 10; i++) {
    document.getElementById("value").innerHTML += (`${i * i} `);
    sum += i * i;
}
document.getElementById("ans-12").innerHTML += sum;