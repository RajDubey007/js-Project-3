let i;
let j;

for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
        document.querySelector(".p").innerHTML += j + '' ;
    }

    document.querySelector(".p").innerHTML += "<br/>";
}