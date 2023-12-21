var allInput=document.querySelectorAll("input")
var allSel=document.querySelectorAll("select")
console.log(allSel)
console.log(allInput)
function storeDate(){
    var date=allSel[0].value;
    var month=allSel[1].value;
    var year=allSel[2].value;
    var fName=allInput[0].value;
    var lName=allInput[1].value;
    var email=allInput[2].value;
    var phone=allInput[3].value;
    var password=allInput[4].value;

    localStorage.setItem("fistname",fName);
    localStorage.setItem("lastname",lName);
    localStorage.setItem("mailid",email);
    localStorage.setItem("number",phone);
    localStorage.setItem("password",password);
    localStorage.setItem("Conformpassword",email);
    localStorage.setItem("date",date);
    localStorage.setItem("month",month);
    localStorage.setItem("year",year);
    
    open("../index.html");

    var Conformpassword=allInput[5].value;
    if(password==Conformpassword)
    {
        document.getElementById("submit").removeAttribute("disabled")
    }
    else{
        document.getElementById("submit").setAttribute("disabled","true")
    }
}
function gen(gender){
    localStorage.setItem("gen",gender);
}