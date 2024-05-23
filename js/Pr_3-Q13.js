let i;
let j;

for(i=1;i<=5;i++)
{
    for(j=5;j>=6-i;j--)
    {
        document.querySelector(".p").innerHTML += j + '' ;
    }

    document.querySelector(".p").innerHTML += "<br/>";
}