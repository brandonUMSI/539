//ch4form.onsubmit = function() {
$("#ch4form").submit(function(event){
    //var validInput = true;
    //var name = document.querySelector("#fullname")
    //var address = document.querySelector("#streetaddr")
  
    //if (name.value.length == 0){
        //document.querySelector("#nameerrormsg").style.display = "block"; 
        //validInput = false;

    if($("#fullname").val() == ""){
        $("#nameerrormsg").css("display","block");
        event.preventDefault();
    }
    //else {
        //document.querySelector("#nameerrormsg").style.display = "none";
  
    else{
        $("#nameerrormsg").css("display","none");
    }

    //if (address.value.length == 0){
        //document.querySelector("#addrerrormsg").style.display = "block"; 
        //validInput = false;
 

    if ($("#streetaddr").val() == ""){
        $("#addrerrormsg").css("display","block");
        event.preventDefault();
    }


    //else {
        //document.querySelector("#addrerrormsg").style.display = "none"; 

    else{
        $("#addrerrormsg").css("display","none");
    }

    return;
})
    //return validInput;
