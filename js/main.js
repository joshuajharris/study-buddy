var refUrl = "https://study-buddy-vcu.firebaseio.com/event";
var ref = new Firebase(refUrl);

ref.on("value", function(snapshot) {
  $('#events-table tbody').empty();
  var events = snapshot.val();
  _.each(events, function(event) {
    var template = _.template($('#eventTemplate').html());
    $('#events-table tbody').append(template({event:event}));
  });
});
