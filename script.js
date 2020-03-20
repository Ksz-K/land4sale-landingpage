document.getElementById("searchClock").disabled = true;

function clock() {
  var data = new Date();
  var godzina = data.getHours();
  var min = data.getMinutes();
  var sek = data.getSeconds();
  var terazjest =
    "" +
    godzina +
    (min < 10 ? ":0" : ":") +
    min +
    (sek < 10 ? ":0" : ":") +
    sek;
  document.getElementById("searchClock").placeholder = terazjest;
}
setInterval(clock, 1000);

function initMap() {
  var options = {
    zoom: 13.3,
    center: { lat: 52.1577, lng: 21.07 }
  };
  var map = new google.maps.Map(document.getElementById("map"), options);

  addMarker({
    coords: { lat: 52.126999, lng: 21.139313 },
    icon: "http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png",
    content:
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Działka na sprzedaż</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Obrys prostokąt:</b> ~33m x ~230m</p>" +
      "<p><b>Powierzchnia:</b>7 597 m<sup>2</sup></p>" +
      '<img src="view.png" alt="Działka Okrzeszyn" width="200" height="80" />' +
      ' <p>Kontakt: <a href="https://okrzeszyn.waw.pl/#kontakt">' +
      "Skorzystaj z formularza</a> " +
      "</p>" +
      "</div>" +
      "</div>"
  });
  addMarker({
    coords: { lat: 52.16326, lng: 21.139 },
    icon: "http://maps.google.com/mapfiles/kml/shapes/highway.png",
    content:
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Most Południowy</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Obwodnica Warszawy</b> - planowany termin oddania do ruchu <b>2020</b></p>" +
      '<img src="bridgeSouth.png" alt="Most Południowy" width="200" height="80" />' +
      "</div>" +
      "</div>"
  });
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map,
      animation: google.maps.Animation.DROP,
      icon: props.icon
    });
    var infoWindow = new google.maps.InfoWindow({
      content: props.content
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }
}
