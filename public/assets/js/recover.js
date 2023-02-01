function doPost(url, body) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
        if (request.readyState === request.DONE) {
            if (request.status === 200) {
                console.log(request.responseText);
            }
        }
    };

    return request.responseText;
}

function recover() {
    event.preventDefault();
    let url = "http://localhost:3000/recover";
    password = document.getElementById("password").value;

    body = {
        password: password,
    };

    doPost(url, body);
}
