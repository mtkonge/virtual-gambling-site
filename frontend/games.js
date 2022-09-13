const oleFlipGame = document.getElementById("ole-flip");
const oleFlipOpen = document.getElementById("ole-flip-button");
const oleFlipClose = document.getElementById("ole-flip-close-button");
const oleFlipButton = document.getElementById("ole-flip-bet-button");
const oleFlipInput = document.getElementById("ole-flip-input");
const oleFlipErrorMsg = document.getElementById("ole-flip-error-msg");
const totalCoinsNav = document.getElementById("coins-text");
const oleFlipImage = document.getElementById("ole-flip-img")
const resultText = document.getElementById("result-text")


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
    const user = await userInfo();
    const coinsUsed = parseInt(oleFlipInput.value);
    if (oleFlipInput.value > user.coins) {
        oleFlipErrorMsg.innerHTML = "You don't have that amount of coins";
        return null;
    }

    const res = await sendPostRequest("/api/games/coinflip", {
        coins: coinsUsed,
    });
    const body = await res.json();

    if (body.msg === "Ok") {
        if (body.result === false) {
            resultText.style.color = "red";
            resultText.textContent = "Soelberg cursed you!"
            oleFlipImage.src = "images/soelberg.png"
            totalCoinsNav.innerHTML = user.coins - coinsUsed;
        } else {
            resultText.style.color = "rgb(0, 220, 40)";
            resultText.textContent = "Helledie blessed you!"
            oleFlipImage.src = "images/helledie.jpg"
            totalCoinsNav.innerHTML = user.coins + coinsUsed;
        }
        return body.result;
    }
    return null;
});
