function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    if (username === "admin" && password === "password") {
        window.location.href = "dashboard.html";  
    } else {
        errorMsg.innerText = "Invalid Username or Password!";
        errorMsg.style.color = "red";
    }
}
