function lodingClose(){
    document.getElementById("loding").style.display="none"
}
setTimeo
var imgArr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]

var num=1;
function inc(){
    if(num<=imgArr.length)
    {
        document.querySelector("header").style.backgroundImage=`url(../Asset/HEADERS/${num}.jpg)`
    }
    else
    {
        num=1;
        document.querySelector("header").style.backgroundImage=`url(../Asset/HEADERS/${num}.jpg)`
    }
    num++;
}
function dec(){
    if(num>=1)
    {
        document.querySelector("header").style.backgroundImage=`url(../Asset/HEADERS/${num}.jpg)`
    }
    else
    {
        num=imgArr.length;
        document.querySelector("header").style.backgroundImage=`url(../Asset/HEADERS/${num}.jpg)`
    }
    num--;
}