//console.log("here")
var imgs = $("img");
var msg = "Hover over an image below."


//for (let i = 0; i < imgs.length;i++){
	//imgs[i].onmouseover = function() {
	 	//document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
	 	//document.querySelector('#image').innerHTML= imgs[i].alt;
	 //}
$.each(imgs,function (key,val){
	console.log(key)
	console.log(val)
	console.log($(val).attr("src"));
	

	 $(val).mouseover(function(){
		 $("#image").css("backgroundImage", "url("+$(val).attr("src")+")");
		 $("#image").html($(val).attr("alt"));
	 })

	 //imgs[i].onfocus = function() {
	 	//document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
	 	//document.querySelector('#image').innerHTML= imgs[i].alt;
	 //}

	 $(val).focus(function(){
		$("#image").css("backgroundImage", "url("+$(val).attr("src")+")");
		$("#image").html($(val).attr("alt"));
	})



	 //imgs[i].onmouseleave = function() {
	 	//document.querySelector('#image').style.backgroundImage="url('')";
	 	//document.querySelector('#image').innerHTML= msg;
	 //}

	 $(val).mouseleave(function(){
		$("#image").css("backgroundImage","url('')");
		$("#image").html(msg)
	})

	 //imgs[i].onblur = function() {
	 	//document.querySelector('#image').style.backgroundImage="url('')";
		 //document.querySelector('#image').innerHTML= msg;
		 
	$(val).blur(function(){
		$("#image").css("backgroundImage","url('')");
		$("#image").html(msg)
	 })



})

