function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    if (username === "admin" && password === "admin") {
        message.textContent = "Login bem-sucedido!";
        message.style.color = "green";
        alert("Login bem-sucedido!");
        return true;
    } else {
        message.textContent = "Nome de usuário ou senha incorretos.";
        message.style.color = "red";
        alert("Nome de usuário ou senha incorretos.");
        return false;
    }
}