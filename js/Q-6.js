let number = 17;
let prim = 1;
let prime = document.getElementById("ans-6");

while (prim < number) {
    if (number % prim == 0) {
        prime.innerHTML += (`${number} is not a prime number <br/>`);
        break;
    }
    else {
        prime.innerHTML += (`${number} is a  prime number <br/>`);
    }
    prim++;
}