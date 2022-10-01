const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

     

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); 
       forms.classList.toggle("show-signup");
    })
})



function login(){

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-pass").value;
   let loginemail =  sessionStorage.getItem("email");
   let loginpassword =  sessionStorage.getItem("password");

   if(email === loginemail && loginpassword === password){
    alert( "successfully login")

   }else{
    alert("invalid username or password")
   }
   
   document.getElementById("login-form").reset();
}



function signup(){
    let username = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    sessionStorage.setItem("username",username)
    sessionStorage.setItem("email",email)
    sessionStorage.setItem("password",password)
   document.getElementById("signin-form").reset();


    

   }


