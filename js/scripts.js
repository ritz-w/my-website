var map;

function initMap() {
  var myLatLng = {
    lat: 51.5518,
    lng: 0.0646
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 5
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Where I am'
  });
  var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<div id="bodyContent">' +
    '<p>This is where I live and work.</p>' +
    '<p>(Approximately...)</p>'
  '</div>' +
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

$(window).load(function() {
   $('#loading').hide();
});

$(document).ready(function() {

  // Tooltips
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //booklet
$(function() {
    $('#mybook').booklet({
        shadows: false,
        manual:   false,
        overlays: true,
        hovers:   true,
        menu: '#custom-menu',
        chapterSelector: true,
        pageSelector: true
    });
});

$.ajax({
  url: 'booklet.json'
}).done(function(data) {


  // var imgUrl = data.book[0]['book image'];

  var template = _.template(
    '<% book.forEach( function ( page ) { %>'+
      '<div>' +
        '<img class="img-responsive" src="<%= page["book image"] %>">'+
      '</div>' +
    '<% } ) %>'
  );

  var htmlSrc = template( data );
  
  console.log(htmlSrc);



})


  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 600, function() {
      window.location.hash = href;
    });
    return false;
  });

  // Stellar
  $(window).stellar();
  // or:
  $('#contact-box').stellar();

  // Submit

  function checkfields() {
    var comment = $(".message-box").val();
    var requiredField = $(".required-field").val();
    var uppercaseComment = comment.toUpperCase();
    var commentReceived = "<br><br>Thanks for your message. We've received it and will get back to you in a few days!";
    var emailcheck = $("#email") 
    var namecheck = $("#name")
    var msgcheck = $("#messagetext")
    if (emailcheck.val() && namecheck.val() && msgcheck.val()) {
      $("#visible-comment").html(uppercaseComment + commentReceived);
      $(".message-box").hide();
      console.log("message submitted");
    }
    else {
      $(".message-box").css("border-color", "red");
      console.log("missing field");
    }
  }

  $("#submit").on('click', checkfields);

  //message box char count
  $(".message-box").on("keyup", function() {
    var charCount = $(".message-box").val().length;
    if (charCount > 50) {
      $("#char-count").css("color", "red");
      console.log("too many characters");
    } else {
      $("#char-count").css("color", "#000")
      $("#char-count").html(charCount);
      console.log(charCount);
    }
  });
});