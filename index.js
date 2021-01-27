let form = document.querySelector(".login-form")
let email = document.getElementById("email")
let password = document.getElementById("password")
let emaillist = document.querySelector(".email-list")
 

function aftersubmit(e){
    e.preventDefault()
    
    if(email.value == "" || password.value == "")
    {
        alert("incorrect login credentials.")
         
    }
    else{
        let item= document.createElement("li")
        item.innerHTML = email.value
        emaillist.appendChild(item)
        email.value =   ""
        password.value= ""
    }
}
form.addEventListener("submit",aftersubmit)
