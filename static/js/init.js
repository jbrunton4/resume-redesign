function init() {

    // Set timezone depending on if BST or not
    if (isBst()) {
        document.getElementById("timezone").innerHTML = "BST";
    } else {
        document.getElementById("timezone").innerHTML = "GMT";
    }


}

setTimeout(init, 10)
