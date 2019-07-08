document.getElementById("searchClock").disabled = true;

function zegar() {
    var data = new Date();
    var godzina = data.getHours();
    var min = data.getMinutes();
    var sek = data.getSeconds();
    var terazjest = "" + godzina +
        ((min < 10) ? ":0" : ":") + min +
        ((sek < 10) ? ":0" : ":") + sek;
    document.getElementById('searchClock').placeholder = terazjest;
}
setInterval(zegar, 1000);

function windowpop(url, width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    //Open the window.
    window.open(url, "Window2", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
}