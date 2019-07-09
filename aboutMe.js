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



function checkEmail(element) {
    var reg1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; 
    if (reg1.test(element.value) == false) {
    element.style.background ='salmon';
    document.getElementById("message-button").disabled = true;
    }else if(reg1.test(element.value) == true){
      element.style.background = "lightgreen";
      document.getElementById("message-button").disabled = false;
    }

  };

function formData() {
  let formContent = document.getElementById("contact-form");
  let email = formContent["email"].value;
  let message = formContent["message"].value;
  let emailDetails = {
    Host : "smtp.elasticemail.com",
    Username : "santa.ozolina.mail@gmail.com",
    Password : "1b6e0c07-ffbf-4c26-b6d9-acdf98686e83",
    To : 'santa.ozolina.mail+contact@gmail.com',
    From : 'santa.ozolina.mail@gmail.com',
    Subject : email,
    Body : message
};

  Email.send(emailDetails).then(
  message => formContent.submit()
);
}

