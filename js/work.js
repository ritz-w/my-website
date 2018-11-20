var websites = [
  {
    title: "Digital Display Archive (2017)",
    pic: "img/dda.png",
    url: "http://d-d-a.herokuapp.com",
    blurb: "Research repository of art projects and exhibitions that use digital tools and contexts to create innovative forms of display.",
    tags: ['Ruby', 'Rails', 'Javascript']
  }, 
  {
    title: "Gallerize (2017)",
    pic: "img/gallerize.png",
    url: "https://ritzblog.herokuapp.com/",
    blurb: "Web app that allows users to position artworks from museum APIs and Unsplash onto virtual walls and then project them onto a 3D surface.",
    tags: ['React', 'React 360', 'Javascript', 'Rails', 'Ruby']
  },
  {
    title: "Semiotize (2018)",
    pic: "img/semiotize.png",
    url: "https://semiotize.herokuapp.com/",
    blurb: "This project was inspired by the role of semiotics in understanding the history of photography. It takes a photograph that the user uploads, and using image recognition technology, matches it to a database of over 500 works of contemporary and historic photography, finding common signs and symbols that have been used.",
    tags: ['React', 'Redux', 'Javascript', 'Rails', 'Ruby']
  },
  {
    title: "LocateHer (2018)",
    pic: "img/locateher.png",
    url: "https://semiotize.herokuapp.com/",
    blurb: "Demo website in two days for the Women Founders in Tech Hackathon for tackling gender diversity in STEM. LocateHer is a single platform for mentorship opportunities & exclusive events targeted at women, who want to start a career in STEM, advance their opportunities, or start a business in STEM.",
    tags: ['React', 'Redux', 'Javascript', 'Rails', 'Ruby']
  }
];

var otherprojs = [
  {
    title: "... all silent but for the buzzing ... website (2014)",
    pic: "img/buzzing.png",
    url: "http://buzzing.rca.ac.uk",
    blurb: "Commissioned and co-designed official website for exhibition on the space between chatter and silence. Commissioned online work by artist Ryder Ripps for the exhibition.",
    tags: ['Project Management', 'Wordpress', 'Javascript']
  },
  {
    title: "RCA Students Union Website (2014-2016)",
    pic: "img/rcasu.png",
    url: "https://rcasu.org.uk/",
    blurb: "Designed, implemented, and managed Wordpress website, including PHP database and plugins.",
    tags: ['Project Management', 'PHP', 'Wordpress']
  },
  {
    title: "Web Development Blog (2018 ~)",
    pic: "img/ritzblog.png",
    url: "https://ritz-w.github.io/",
    blurb: "Personal blog with stories and research on my ideas in web development.",
    tags: ['Writing', 'Tech']
  }


];

var events = [
  {
    title: "Tracing the Tacit (2014)",
    pic: "img/wysing.png",
    url: "http://www.wysingartscentre.org/archive/retreats/escalator_retreat_13_-_call_for_proposals/2013",
    blurb: "Curated artists retreat at Wysing Arts Centre, each day the theme of chance, disorientation, "
  },
  {
    title: "Moon Week (2015)",
    pic: "img/moonweek.jpg",
    url: "https://ritzblog.herokuapp.com/",
    blurb: "Curated a week of events and workshops dedicated to the moon. "
  },
  {
    title: "Diaspore (2016)",
    pic: "img/diaspore.jpg",
    url: "https://ritzblog.herokuapp.com/",
    blurb: "Curated week of events, workshops, and performances on the subject of sustainability. In collaboration with Lou-Atessa Marcellin."
  }, 

  {
    title: "The Unknown Artist (2016)",
    pic: "img/unknownp1.jpg",
    url: "https://ritzblog.herokuapp.com/",
    blurb: "Curated exhibition with works from the RCA archive, an epitaph to the enigmatic persona of the student within the collection. In collaboration with Miloslav Vorlicek."
  },
  {
    title: "Yoko Toda: The Complete Works (2011)",
    pic: "img/yokotoda.jpg",
    url: "https://ritzblog.herokuapp.com/",
    blurb: "In collaboration with Alice Wong, edited and produced monograph of archived works of Japanese painter Yoko Toda."
  }
]

//generate website examples
for(var i = 0; i < websites.length; ++i ) {
  if (i%2 === 0) {
  	$("#projectsexample").append("\
      <div class='row'>\
    		<div class='col-md-6'>\
          <a href=" + websites[i].url + " class='work-img'>\
            <img class=' img-responsive work-img' src='" + websites[i].pic + "'>\
            <span class='info'><p class='proj-title'></p> " + websites[i].title + " </p></span>\
            <p class='projects-blurb'>" + websites[i].blurb + "<br /><br />Tags: " + websites[i].tags.join(", ") + "</p>\
          </a>\
        </div>\
      </div>\
    ");
  } else {
    $("#projectsexample .row:last-child").append("\
        <div class='col-md-6'>\
          <a href=" + websites[i].url + " class='work-img'>\
            <img class=' img-responsive work-img' src='" + websites[i].pic + "'>\
            <span class='info'><p class='proj-title'></p> " + websites[i].title + " </p></span>\
            <p class='projects-blurb'>" + websites[i].blurb + "<br /><br />Tags: " + websites[i].tags.join(", ") + "</p>\
          </a>\
        </div>\
    ");
  }
	
  var images = $("#projectsexample img");
  if (i%2 === 0) {
	 $(images[i]).css("border", "1px solid black");
	 } else {
	 $(images[i]).css("border", "1px solid black");
	 };
  };


$(".work-img").mouseenter( function() {
	$(".info", this).show();
  }).mouseleave(function(){
	$(".info", this).hide();
});

//generate code examples
for(var i = 0; i < otherprojs.length; ++i ) {
	$("#codeexample").append("\
		<div class='col-md-6'>\
		<a href=" + otherprojs[i].url + " class='work-img'>\
    <img class='img-responsive work-img' src='" +otherprojs[i].pic + "'>\
    <span class='info'><p class='proj-title'></p> " +otherprojs[i].title + " </span>\
    <p class='projects-blurb'>" + otherprojs[i].blurb + "<br /><br />Tags: " + otherprojs[i].tags.join(", ") + "</p>\
    </div>\
  ");

	var images = $("#codeexample img");
	if (i%2 === 0) {
		$(images[i]).css("border", "1px solid black");
	  } else {
		$(images[i]).css("border", "1px solid black");
	  };
  };


//generate code examples
for(var i = 0; i < events.length; ++i ) {
  $("#events").append("\
    <div class='col-md-6'>\
    <a href=" + events[i].url + " class='work-img'>\
    <img class='img-responsive work-img' src='" +events[i].pic + "'>\
    <span class='info'><p class='proj-title'></p> " +events[i].title + " </span>\
    <p class='projects-blurb'>" + events[i].blurb + "</p>\
    </div>\
  ");

  var images = $("#events img");
  if (i%2 === 0) {
    $(images[i]).css("border", "1px solid black");
    } else {
    $(images[i]).css("border", "1px solid black");
    };
  };

$(".work-img").hover( function() {
  var prevWidth = $(".info", this).prev().width();
  var parentWidth = $(".info", this).parent().width();
  var leftSpace = ((parentWidth - prevWidth) / 2);
  $(".info", this).css("left", leftSpace);
  $(".info", this).css("width", prevWidth);
  $(".info", this).show();
  }).mouseleave(function(){
  $(".info", this).hide();
});





