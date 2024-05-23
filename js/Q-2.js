let f = 1, fact = 1
while (f <= 5) {
    fact = fact * f
    f++;
}

document.querySelector(".Ans").innerHTML = fact;
