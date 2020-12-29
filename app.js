function calc(){
//var dateyear = new Date();

   let dy = document.querySelector("#year");
    console.log(dy.value)
 // let extr =  dateyear.getFullYear();
var txt="";
var year = dy.value;
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
txt = dy.value +" is a leap year";
 }
 else{
    txt = dy.value +" is not a leap year";

 }
 var content = document.querySelector("#disp");
 content.innerHTML = txt;

}