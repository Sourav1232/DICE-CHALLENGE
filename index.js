var r1=Math.floor((Math.random()*6)+1);
var random1="images/dice"+r1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",random1);
var r2=Math.floor((Math.random()*6)+1);
var random2="images/dice"+r2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random2);
if(r1>r2){
  document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(r1<r2){
  document.querySelector("h1").innerHTML="🚩Player2 Wins!";
}
else if(r1===r2){
  document.querySelector("h1").innerHTML="Draw";
}
