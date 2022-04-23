/* Token Reset
   Issues new Token */
async function resetToken() {
    try {
        const data = await fetch("https://opentdb.com/api_token.php?command=request");
        const json = await data.json();
        token = json.token;
        localStorage.setItem("token", token);
    } catch (err) {
        console.log(err);
    }
    return window.location.assign("index.html");
}
