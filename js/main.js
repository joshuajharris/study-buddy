var refUrl = "https://study-buddy-vcu.firebaseio.com/event";
var ref = new Firebase(refUrl);

ref.on("value", function(snapshot) {
  $('#events-table tbody').empty();
  var events = snapshot.val();
  _.each(events, function(event) {
    var template = _.template($('#eventTemplate').html());
    $('#events-table tbody').append(template({event:event}));
    addMarker(event.title, event.lat, event.lng);
  });
});

function joinEvent(id) {
  var event = ref.child(id);
  event.child("numAttending").once("value", function(snapshot) {
    var numAttending = parseInt(snapshot.val());
    ref.child(id).update({ numAttending: numAttending + 1});
  });
}

function cancelEvent(id) {
  var event = ref.child(id);
  event.child("numAttending").once("value", function(snapshot) {
    var numAttending = parseInt(snapshot.val());
    ref.child(id).update({ numAttending: numAttending - 1});
  });
}

$('#event-submit').bind("click", function(){

  var event = {};

  event.title = $('#title').val();
  event.subject = $('#subject').val();
  event.dateOf = $('#dateOf').val();
  event.location = $('#location').val();
  event.numAttending = 1;
  event.maxCapacity = $('#maxCapacity').val();
  event.desc = $('#desc').val();
  event.creator = 'RamhacksTester';
 
  var newEvent = ref.push(event);
  ref.child(newEvent.key()).update({id: newEvent.key()});

  return false;
});
