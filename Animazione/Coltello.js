var rotINT,n = 0;
function rotateIMG(x,y)
{
img = document.getElementsByClassName("Coltello");
img[0].style.top = y+"px";
img[0].style.left = x+"px";
clearInterval(rotINT);
rotINT=setInterval("startRotate(img)",6); 
}

function startRotate(x)
{
 n = n + 1;
for (i = 0; i < x.length; i++)
{
 x[i].style.transform="rotate(" + 90 + "deg)";
 x[i].style.OTransform="rotate(" + 90 + "deg)";
 x[i].style.MozTransform="rotate(" + 90 + "deg)";
var sx = x[i].style.top;
x[i].style.top = (parseInt(sx.substr(0,sx.search("p")))+n)+"px";

}
if (n== 33)
{
clearInterval(rotINT);
n=0;
}



}