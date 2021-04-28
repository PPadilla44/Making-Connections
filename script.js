var acceptButton = document.getElementById("accept-button");
var textBox = document.getElementById("new-name");

function editProfile() {
    acceptButton.style.visibility = "visible";
    textBox.style.visibility = "visible";
}

function changeName() {
    var name = document.getElementById("name");
    var newName = textBox.value;
    if(newName.length > 0) {
        name.innerHTML = newName;
        acceptButton.style.visibility = "hidden";
        textBox.style.visibility = "hidden";
    } 
    if (newName == "Pablo Padilla") {
        console.log("YEEET")
    }
    textBox.value = null;
}

var requestNumber = parseInt(document.getElementById("request-number").innerHTML);
var connectionNumber = parseInt(document.getElementById("wide").innerHTML)
var connections = document.querySelector(".connections");

function accept(requestId) {
    var request = document.getElementById(requestId);
    connectionNumber++;
    requestNumber--;
    document.getElementById("wide").innerHTML = connectionNumber;
    document.getElementById("request-number").innerHTML = requestNumber;
    
    request.querySelector(".accept").remove();
    request.querySelector(".decline").remove();

    connections.appendChild(request);

    request.classList.remove('checks');
    request.classList.add('names');

    if(requestNumber < 1 ){
        document.querySelector(".request").remove();
    }

}

function decline(requestId) {
    var request = document.getElementById(requestId);
    requestNumber--;
    document.getElementById("request-number").innerHTML = requestNumber;
    request.remove();
    if(requestNumber < 1 ){
        document.querySelector(".request").remove();
    }
}

