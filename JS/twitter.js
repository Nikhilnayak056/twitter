function formvalidation(){

    // Validatrion for User name

   //  ------------------------------------------------------------------------------------------------------
     var username=document.querySelector('.validuser').value;
     var email_ID=document.querySelector('.validemail').value;
     var password=document.querySelector('.validpass').value;
     var confirmpass=document.querySelector('.validconfirm').value;

   // -------------------------------------------------------------------------------------------------------
     if(username == ""){
        document.querySelector('.notvalid').innerHTML='**Please enter a valid username**';
        return false;
     }
     if((username.length<2)){
        document.querySelector('.notvalid').innerHTML='**Minimum 2-10 characters**';
        return false;
     }
     if(email_ID == ""){
        document.querySelector('.notvalid2').innerHTML='**Please enter a valid emailid**';
        return false;
     }
     
    //  Password Validation

   //  ------------------------------------------------------------------------------------------------------
     if(password == ""){
        document.querySelector('.notvalid3').innerHTML='**Please enter a valid password**';
        return false;
     }
   
     if(password.length<4){
        document.querySelector('.notvalid3').innerHTML='**Minimum 8 characters for password**';
        return false;
     }
       
     if( confirmpass == ""){
        document.querySelector('.notvalid4').innerHTML='**Please enter a valid password**';
        return false;
     }
     if(( confirmpass.length >password.length)||( confirmpass.length<password.length)){
        document.querySelector('.notvalid4').innerHTML='**enter same password**';
        return false;
     }else{
   
   
   let user={user_name:username,user_email:email_ID,user_pass:password}
   var resp = fetch('https://fsd1.herokuapp.com/users/create',
   {
     method:'POST',
     headers: {'Content-Type':'application/json'},
     body:JSON.stringify(user)
   
  });
  console.log(resp);
     resp.then(data => data.json()).then(function(response) {
        if(response.status === 'success'){
           console.log(response)
           alert('SignUp Successfull.... **(check console)**');
           console.log(response)
        }
}).catch(alert("User already Exists...."));

}return false;
}
         


   //  ------------------------------------------------------------------------------------------------------

   // Login page.........................................................................................

   //  ------------------------------------------------------------------------------------------------------

    function validatelogin(){
    var loginuser=document.querySelector('.q').value;
    var loginpass=document.querySelector('#q').value;

    if(loginuser == ""){
        document.querySelector('.validlogin').innerHTML='**Enter a valid user emailID**';
        return false;
    }

    if(loginpass == ""){
        document.querySelector('.validloginp').innerHTML='**Enter a valid user password**';
        return false;
    } else
          {     

      let user={user_email:loginuser,user_pass:loginpass};
   
       var resp = fetch('https://fsd1.herokuapp.com/users/login',
       {
         method:'POST',
         headers: {'Content-Type':'application/json'},
         body:JSON.stringify(user)
      });
			resp.then(data => data.json()).then(function(response) {
				if(response.status === 'success'){
               //console.log(resp);
               //console.log(response);
               alert("Login successfull ....$(check the console)$");
               window.location.href = '/Homepage.html';
            }
    });
    return false;
   }
}
   //  ------------------------------------------------------------------------------------------------------







