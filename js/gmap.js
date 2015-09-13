var map;
function initMap() {
  var myLatLng = {lat: 37.54898, lng: -77.45342};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng,
    styles: [
      { 
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [ 
          { "visibility": "on" }, 
          { "color": "#febd13" }, 
          { "weight": 0.1 } 
        ] 
      },
      { "stylers": [ 
        { "visibility": "on" }, 
        { "invert_lightness": true } 
      ] 
      },{ } ]
  }
  );

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
      marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "You are Here"
      }); 

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  }
}

function addMarker(lat, lng, title) {
  marker = new google.maps.Marker({
    position: {lat: lat, lng: lng},
    map: map,
    title: title
  }); 
};
