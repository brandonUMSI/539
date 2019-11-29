$("#subscribe").click(function(){
	

	if(this.checked){
		$("#emailField").css("display", "block")
		console.log("selected");
	}


	else{
		$("#emailField").css("display", "none");
		console.log("not selected");
	}
})




//subscribe.onchange = function() {
	//var x = document.querySelector("#emailField");
	//if (this.checked){
		//console.log("selected");
    	//x.style.display = "block";
  	//} else {
  		//console.log("Not selected");
    	//x.style.display = "none";
  	//}
  // 	Advanced Option....
  // 	x.style.display == "block" ? 
		// x.style.display = "none" : 
		// x.style.display = "block"; 
//}

