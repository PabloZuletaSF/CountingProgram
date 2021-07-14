alert("Hello! Welcome to my counting program!")
var person = prompt("Please enter your name");

//	if (person == null || person == "") {
//	alert("User cancelled the prompt.");
//	} else {
alert("Hello " + person + "! Lets get to counting!");
//	}

//	$("h1").on("click", function(){
	$("h2").text("Welcome " + person + "!")

//})

$("#button1").on("click", function (){
	$("h3").empty();
	var num=$("input").val()
	for(i=0;i<=num;i++){
  	$("h3").append(i+"<br>")
	}
})

$("#button2").on("click", function (){
	$("h4").empty();
	var num=$("#button").val()
	for(i=0;i<=num;i+=2){
  	$("h4").append(i+"<br>")
	}

})

$("#button3").on("click", function (){
	$("h5").empty();
	var num=$("#count4").val()
	for(i=0;i<=num;i+=4){
  	$("h5").append(i+"<br>")
	}

})





