var form = document.querySelector(".signup-form")
var uname = document.getElementById("uname")
var surname = document.getElementById("surname")
var email = document.getElementById("email")
var password = document.getElementById("password")
var DOB = document.getElementById("DOB")
var male = document.getElementById("male")
var female = document.getElementById("female")
var other = document.getElementById("other")
var table = document.getElementsByTagName('table')[0];

function aftersignup(a)
{
  a.preventDefault()
  

  if(uname.value == "" || email.value == "" || password.value == "" || DOB.value == "" )
  {
      alert("incorrect login credentials.")
       
  }
  else{
        var newRow = table.insertRow(table.rows.length/2+1);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel3 = newRow.insertCell(3);
        var cel3 = newRow.insertCell(4);
        var cel3 = newRow.insertCell(5);


        cel1.innerHTML = uname;
        cel2.innerHTML = surname;
        cel3.innerHTML = DOB;
        cel3.innerHTML = male;
        cel3.innerHTML = female;
        cel3.innerHTML = DOB;
        cel3.innerHTML = gender;
   }   
        
}

form.addEventListner("submit",aftersubmit)