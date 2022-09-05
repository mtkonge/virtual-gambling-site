const oleFlipGame = document.getElementById("ole-flip");
const oleFlipOpen = document.getElementById("ole-flip-button");
const oleFlipClose = document.getElementById("ole-flip-close-button");
const oleFlipButton = document.getElementById("ole-flip-bet-button");
const oleFlipInput = document.getElementById("ole-flip-input");
const oleFlipErrorMsg = document.getElementById("ole-flip-error-msg");
const totalCoinsNav = document.getElementById("coins-text");

oleFlipOpen.onclick = () => {
    oleFlipGame.style.display = "block";
};

oleFlipClose.onclick = () => {
    oleFlipGame.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == oleFlipGame) {
        oleFlipGame.style.display = "none";
    }
};
oleFlipButton.addEventListener("click", async () => {
    const user = await userInfo()
    const coinsUsed = parseInt(oleFlipInput.value)
    if (oleFlipInput.value > user.coins) {
        oleFlipErrorMsg.innerHTML = "You don't have that amount of coins"
        return null
    }

    const res = await sendPostRequest("/api/games/coinflip/" + user.id, {coins: coinsUsed});
    const body = await res.json();

    if (body.msg === "Ok") {
        if (body.result === false) {
            totalCoinsNav.innerHTML = user.coins - coinsUsed
        }
        else {
            totalCoinsNav.innerHTML = user.coins + coinsUsed
        }
        return body.result
    }
    return null;
});






