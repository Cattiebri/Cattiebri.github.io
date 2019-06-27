function on(id) {
  document.getElementById(id).style.display = "block";
}

function off() {
  $(".overlay").hide();
}

function showtick() {
	$("#tick").show();
	$("#licence").hide();
}

$(document).on('shown.bs.collapse', function(event){
        //console.log( "in! print e: " +event.type);
        event.target.scrollIntoView();
    });