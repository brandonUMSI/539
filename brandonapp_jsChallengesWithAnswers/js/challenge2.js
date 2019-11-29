$("#useBilling").change(function(){
//useBilling.onchange = function() {
	if(this.checked){

	
	//let home = document.querySelector("#home");
	//let billing = document.querySelector("#billing");

	//if (this.checked){
		//home.value = billing.value;
		$("#home").val($("#billing").val());
		//home.disabled = true;}
		home.disabled = true;

	}


	else{
	//else {
		//home.value = "";
		$("#home").val("");
		//home.disabled = false;}
		home.disabled = false
	}
})
	
	//}