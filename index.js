var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
document.querySelector(".submit-btn").addEventListener("click",()=>{
    if(document.querySelector(".email").value==""){
        document.querySelector(".comment").classList.remove("wrong");
        document.querySelector(".comment").classList.remove("correct");
        document.querySelector(".comment").innerHTML="Enter an email address";
        document.querySelector(".comment").classList.add("wrong");
    }
    else if(document.querySelector(".email").value.match(validRegex)){
        document.querySelector(".comment").classList.remove("wrong");
        document.querySelector(".comment").classList.remove("correct");
        document.querySelector(".comment").innerHTML="Email successfully registered";
        document.querySelector(".comment").classList.add("correct");
    }
    else{
        document.querySelector(".comment").classList.remove("wrong");
        document.querySelector(".comment").classList.remove("correct");
        document.querySelector(".comment").innerHTML="Invalid Email";
        document.querySelector(".comment").classList.add("wrong");
    }
})