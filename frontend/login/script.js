const loginButton = document.getElementById("login-button");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

loginButton.addEventListener("click", async () => {
    const data = {
        username: usernameInput.value,
        password: passwordInput.value,
    };
    const res = await sendPostRequest("/api/user/login", data);
    const body = await res.json();

    if (body.msg === "Ok") {
        return (window.location = "/");
    } else {
        errorMsg.textContent = body.msg;
    }
});
