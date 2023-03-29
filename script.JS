

  function myFunction() {
    var x = document.getElementById("icon");
    var Menu = document.querySelector('.icon i');
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
      Menu.classList.toggle('fa fa-bars');
    } else {
      Menu.classList.toggle('fa-xmark');
      x.style.visibility = "visible";
    }
  }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides,2000);
}

const form = document.getElementById("form");
var fField = document.getElementById("name");
var ferror = document.getElementById("n-error");
var emailFeild = document.getElementById("mail");
var emailerror = document.getElementById("e-error");
var selectFeild = document.getElementById("floatingSelect");
var selecterror = document.getElementById("s-error");
var disFeild = document.getElementById("textarea");
var diserror = document.getElementById("t-error");

function validatename()
{
    if(fField.value === "")
    {
       ferror.innerHTML = "please enter the First name";
       fField.style.border = "2px solid red";
       return false;
    }

    else if(fField.value.length < 4 ){
       ferror.innerHTML = "name should contain min 4 characters";
       fField.style.border = "2px solid red";
       return false;
    }

    else{
       ferror.innerHTML = "";
       fField.style.border = "2px solid yellow";
       return true;
    }
}

function validatemail()
{
    if(emailFeild.value === ""){
       emailerror.innerHTML = "please enter the E-mail ID";
       emailFeild.style.border = "2px solid red";
       return false;
    }

    else if(!emailFeild.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailerror.innerHTML = "please enter a  valid E-mail ID";
       emailFeild.style.border = "2px solid red";
       return false;
    }

    else{
       emailerror.innerHTML = "";
       emailFeild.style.border = "2px solid yellow"; 
       return true;
    }
}

function validateplan()
{
   if(selectFeild.value === "-1"){
       selecterror.innerHTML = "select your Plan";
       selectFeild.style.border = "2px solid red";
       return false
   }

   else{
       selecterror.innerHTML = " ";
       selectFeild.style.border = "2px solid yellow";
       return true;
   }
}

function validatetext()
{
       if(disFeild.value === ""){
           diserror.innerHTML = "Message cannot be blank";
           disFeild.style.border = "2px solid red";
           return false; 
       }

       else if(!disFeild.value.match(/^[a-z A-Z]*$/)){
           diserror.innerHTML = "Message Should only contain alphabet"; 
           disFeild.style.border = "2px solid red";
           return false;
       }

       else{
           diserror.innerHTML = ""; 
           disFeild.style.border = "2px solid yellow";
           return true;
       }
}
form.addEventListener('submit',e=>{
  e.preventDefault();
  checkinput();
});
function checkinput() {
  const firstname = fField.value.trim();
  const emailvalue = emailFeild.value.trim();
  const selectvalue = selectFeild.value.trim();
  const disvalue = disFeild.value.trim();

  alert("Your Quotation Received We will be in Touch with You Shortly")
  
}



