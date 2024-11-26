let submitBtn=document.getElementById("btn");
let name=document.getElementById("userName");
let email=document.getElementById("userEmail");
let pswd=document.getElementById("userPswd");
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
      const nameValue=name.value
      const emailValue=email.value
      const pswdValue=pswd.value
      console.log(nameValue);
      localStorage.setItem("name",nameValue)
      localStorage.setItem("email",emailValue)
      localStorage.setItem("pswd",pswdValue)
      alert("signup done successfully!!!!!!!")
      setTimeout(()=>{
        window.open("login.html") 

      },3000)
      
})