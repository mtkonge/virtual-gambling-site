
window.setInterval(async () => {
    let date = new Date(); 
    if(date.getHours() === 0){ 
        res = await sendPostRequest("api/newDay")
        const body = await res.json();
        console.log(body.msg)
    }
}, 360000); 