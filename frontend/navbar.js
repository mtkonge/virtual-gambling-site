const logout = async () => {
    await (
        await fetch("/api/user/logout", { method: "POST" })
    ).json();
    window.location.reload();
};

const navbarMain = async () => {
    const user = await userInfo();
    if (!user) return;

    const welcomeText = document.getElementById("welcome-text");
    welcomeText.innerHTML = "Welcome to soc-gambling, " + user.username;

    const coinsImg = document.getElementById("coins-image");
    coinsImg.style.display = "block";

    const coinsText = document.getElementById("coins-text");
    coinsText.innerHTML = user.coins;

    const accountImage = document.getElementById("navbar-account-image");
    accountImage.href = "logout";

    const accountText = document.getElementById("navbar-account-text");
    accountText.textContent = "Log out";

    const accountInput = document.getElementById("navbar-account-button");
    accountInput.href = "/logout";
    accountInput.addEventListener("click", (event) => {
        event.preventDefault();
        logout();
    });
};

navbarMain();
