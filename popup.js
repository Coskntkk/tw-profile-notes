let username = ""
chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    if (url.replace('https://twitter.com/', '') === url) {
        document.getElementById("username").innerText = "Not in twitter."
    } else {
        let body = document.getElementsByTagName("body")[0]
        let temp = url.replace('https://twitter.com/', '')
        let usernamex = temp.split('/')[0];
        username = usernamex
        document.getElementById("username").innerText = usernamex
        let note = localStorage.getItem(username)
        if (note === null) body.innerHTML += `<p>No note.</p>`
        else body.innerHTML += `<p>"${note}"</p>`
        body.innerHTML += `<input id="input" /><button id="btn" >Edit</button>
        <p>You need to close and reopen this to take effect.*</p>`
        document.getElementById('btn').addEventListener('click', function () {
            let note = document.getElementById("input").value
            localStorage.setItem(username, note)
            body.innerHTML = body.innerHTML.replace('<p>No note.</p>', `<p>"${note}"</p>`)
        });
    }
});