const leaderboardList = document.getElementById("leaderboard-list")

setInterval(async () => {
    leaderboardMain()
}, 360000 );


const leaderboardMain = async () => {
    const res = await fetch("api/leaderboard/refresh")
    const body = await res.json()
    leaderboardList.innerHTML = ""
    for (let i = 0; i < body.leaderboard.length; i++) {
        leaderboardList.innerHTML += 
        `<li>
            <span class=\"leaderboard-text-container\">
                <p class=\"leaderboard-text\">${body.leaderboard[i].username}</p>
                <p class=\"leaderboard-text\">${body.leaderboard[i].score}</p>
            </span>
        </li>`
    }
};

leaderboardMain()
