

const userInfo = async () => {
    const res = await (await fetch("/api/user/data")).json();
    if (res.msg === "Ok") return res.data;
    return null;
};

const logout = async () => {
    const res = await (
        await fetch("/api/user/logout", { method: "POST" })
    ).json();
    window.location.reload();
};

const navbarMain = async () => {
    console.log("start")
    const user = await userInfo();
    if (!user) return;

    const accountImage = document.getElementById("navbar-account-image")
    accountImage.src = "/images/logout.svg"

    const accountText = document.getElementById("navbar-account-text")
    accountText.textContent = ("Log out")

    console.log("mid")

    const accountInput = document.getElementById("navbar-account-button")
    accountInput.href = "/logout";
    accountInput.addEventListener("click", (event) => {
        event.preventDefault();
        logout();
    });

    console.log("end")


};


navbarMain()
