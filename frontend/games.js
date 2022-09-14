const oleFlipGame = document.getElementById("ole-flip");
const oleFlipOpen = document.getElementById("ole-flip-button");
const oleFlipClose = document.getElementById("ole-flip-close-button");
const oleFlipButton = document.getElementById("ole-flip-bet-button");
const oleFlipInput = document.getElementById("ole-flip-input");
const oleFlipErrorMsg = document.getElementById("ole-flip-error-msg");
const totalCoinsNav = document.getElementById("coins-text");
const oleFlipImage = document.getElementById("ole-flip-img")
const resultText = document.getElementById("result-text")


let flipping = false

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
    if (flipping) {
        return;
    }
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
        flipping = true;
        if (body.result === false) {
            await animation("soelberg");
            resultText.style.color = "red";
            resultText.textContent = "Soelberg cursed you!"
            totalCoinsNav.innerHTML = user.coins - coinsUsed;
        } else {
            await animation("helledie");
            resultText.style.color = "rgb(0, 220, 40)";
            resultText.textContent = "Helledie blessed you!"
            totalCoinsNav.innerHTML = user.coins + coinsUsed;
        }
        flipping = false
        return body.result;
    }
    return null;
});
