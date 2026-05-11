function checkResult(){

let marks=document.getElementById("marks").value;

if(marks>=35){
document.getElementById("result").innerHTML="Pass";
}
else{
document.getElementById("result").innerHTML="Fail";
}

}
