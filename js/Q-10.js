
let ans10 = document.getElementById("ans-10");
let number = 1;

do {
    if (number % 3 === 0 && number % 5 === 0) {
        document.getElementById("ans-1").innerHTML = ("FizzBuzz");
    } else if (number % 3 === 0) {
        document.getElementById("ans-2").innerHTML = ("Fizz");
    } else if (number % 5 === 0) {
        document.getElementById("ans-3").innerHTML = ("Buzz");
    } else {
        document.getElementById("ans-4").innerHTML = (number); 
    }
    number++;
} while (number <= 100);
