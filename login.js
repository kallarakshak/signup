const loginBtn = document.getElementById("btn")
        
loginBtn.addEventListener("click", () => {

    let nameStorage = localStorage.getItem("name");
    let pswdStorage = localStorage.getItem("pswd");
    let inputUserName = document.getElementById("userName").value
    let inputUserPswd = document.getElementById("userPswd").value
    if (nameStorage == inputUserName && pswdStorage == inputUserPswd) {
        alert("login done successfully !!!!!!!!!")
      setTimeout(() => {
       
        window.open("home.html")
      }, );
    }else{
        alert("oops invalid crdentials")
    }
})