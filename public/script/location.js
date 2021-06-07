
function initMap() {
  // Location -> NYC
  var location = { lat: 40.712, lng: -74.006 };
  
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
