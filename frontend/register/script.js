const registerButton = document.getElementById("register-button");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

registerButton.addEventListener("click", async () => {
    const data = {
        username: usernameInput.value,
        password: passwordInput.value,
    };
    const res = await sendPostRequest("/api/user/register", data);
    const body = await res.json();

    if (body.msg === "Ok") {
        return (window.location = "/login");
    } else {
        errorMsg.textContent = body.msg;
    }
});
