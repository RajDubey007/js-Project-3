let b;
let hyp = "";

for (b = 1; b <= 10; b++) {
    hyp += b;
    if (b < 10) {
        hyp += "-";
    }

}
document.getElementById("ans-11").innerHTML = hyp;

