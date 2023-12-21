function collectValue(){
    var useremail=localStorage.getItem("mailid")
    var password=localStorage.getItem("password")
    var userEnteredEmail=document.getElementById("loginEmail").value
    var userEnterPasswors=document.getElementById("loginPassword").value
    console.log(userEnteredEmail,userEnterPasswors)
    if(useremail==userEnteredEmail && password==userEnterPasswors){

        open("./Html/MainHome.html");
    }
    else{
        document.getElementById("result").innerHTML="Wrong User Name Or Password"
        document.getElementById("result").style.color="red"
        document.getElementById("result").style.color="red"
    }
}