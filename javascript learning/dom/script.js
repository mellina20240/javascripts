function validate(e){
    e.preventDefault()
    const email=document.getElementById("email").value
    const password = document.getElementById("password").value
    const age = document.getElementById("age").value
    const msgbox = document.getElementById("message")

    let message=""
    if (email===""){
        message="email is required"
        msgbox.style.color="red"
    }
   else if (password === "") {
        message = "password should be at least 6 carachters"
        msgbox.style.color="red"
    }
   else if ( age=== "") {
        message = "you should be at least 13"
        msgbox.style.color="red"
    }
    else{
        message="login succesful"
        msgbox.style.color="green"
    }
    msgbox.innerText=message
}