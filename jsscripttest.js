//var mybutton = document.getElementsByTagName("button")[0];
//
//mybutton.addEventListener("mouseover", function() {
//	console.log("CLICKED NOW!!!!");
//})



document.addEventListener("DOMContentLoaded", function () {
  var mybutton = document.getElementsByTagName("button")[0];

  mybutton.addEventListener("click", function () {
    console.log("CLICKED NOW!!!!");
  });

  var enterbutton = document.getElementById("enter");
  var input = document.getElementById("userinput");
  var ul = document.querySelector("ul");

  enterbutton.addEventListener("click", function (){
  		var li = document.createElement("li");
  		li.appendChild(document.createTextNode("Testing"));
  		ul.appendChild(li);
  		var li2 = document.createElement("li");
  		li2.appendChild(document.createTextNode(input.value));
  		ul.appendChild(li2);
  });

  var mylist = document.getElementsByClassName("done");
  console.log(mylist);

});