
const sendPostRequest = async (url, data = {}) => {

    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const method = "POST"
    const res = await fetch(url, {body, headers, method})

    return res
}