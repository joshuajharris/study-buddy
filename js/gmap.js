var map;
function initMap() {
  var myLatLng = {lat: 37.54898, lng: -77.45342};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });
/*
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });*/
}

function addMarker(lat, lng, title) {
  marker = new google.maps.Marker({
    position: {lat: lat, lng: lng},
    map: map,
    title: title
  }); 
};
