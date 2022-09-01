const oleFlipGame = document.getElementById("ole-flip");
const oleFlipOpen = document.getElementById("ole-flip-button");
const oleFlipClose = document.getElementById("ole-flip-close-button");

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


