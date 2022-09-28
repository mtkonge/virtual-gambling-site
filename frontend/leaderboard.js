const leaderboardList = document.getElementById("leaderboard-list")

setInterval(async () => {
    leaderboardMain()
}, 360000 );


const leaderboardMain = async () => {
    const res = await fetch("api/leaderboard/refresh")
    const body = await res.json()
    leaderboardList.innerHTML = ""
    for (let i = 0; i < body.leaderboard.length; i++) {
        leaderboardList.innerHTML += "<li>" + body.leaderboard[i].username + " " + body.leaderboard[i].score + "</li>"
    }
};

leaderboardMain()
