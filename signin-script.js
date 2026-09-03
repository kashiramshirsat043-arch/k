function checkSignIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email === "admin@test.com" && password === "password123") {
        message.style.color = "green";
        message.textContent = "Sign in successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password.";
    }
}