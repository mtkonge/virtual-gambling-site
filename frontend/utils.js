const userInfo = async () => {
    const res = await (await fetch("/api/user/data")).json();
    if (res.msg === "Ok") return res.data;
    return null;
};

const sendPostRequest = async (url, data = {}) => {

    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const method = "POST"
    const res = await fetch(url, {body, headers, method})

    return res
}