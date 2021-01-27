let btnAdd = document.querySelector('button');
let table = document.querySelector('table'); 
let unameInput = document.querySelector('#uname');
let surnameInput = document.querySelector('#surname');
let emailInput = document.querySelector('#email');
let DOBInput = document.querySelector('#DOB');
let passwordInput = document.querySelector('#password');


 
btnAdd.addEventListener('click', () => {
 
    var plength = passwordInput.value.length

    let date = new Date(DOBInput.value)
    let date2 = new Date("01/01/2007")

  if(unameInput.value == "" || emailInput.value == "" || DOBInput.value == "" || passwordInput.value == "")
 {
    alert("Please fill the given fields")
 }

 else  if( plength < 8)
 {
    alert("The password should have more than or equal to 8 characters") 
 }
 else  if(  date > date2)
 {
    alert("The DOB must be before 1st of January 2007") 
 }
 else
 {
   
   var genders = document.getElementsByName('gender');
   let gender;
//var gender_value;
for(var i = 0 , j=1; i < genders.length; i++)
{
    if(genders[i].checked)
    {
        gender = genders[i].value;
        j+=1
        break;
    }
 
     
}
if(j==1)
{
    alert("Please fill the given fields")
}


  //   gender= gender_value.value

  
    let  uname = unameInput.value;
    let  surname = surnameInput.value;
    let  email =  emailInput.value;
    let  DOB =  DOBInput.value;
     
    
    if(j!=1)
    {
    let template = `
                <tr>
                    <td>${uname}</td>
                    <td>${surname}</td>
                    <td>${email}</td>
                    <td>${DOB}</td>
                    <td>${gender}</td>
                </tr>`;
 
    table.innerHTML += template;
    }

 
}
});
