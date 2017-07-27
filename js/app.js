let vid = document.querySelector('video');
let span = $(".content span");

vid.volume =.5;
// $('video').mediaelementplayer({
//   features: ['playpause', 'tracks', 'progress'],
//   startLanguage: 'en'
// });
vid.addEventListener('timeupdate', function() {
	let now = vid.currentTime;
	// highlight text as video plays
	for (let i = 0; i < span.length; i++) {
	  if (now >= span[i].getAttribute("data-start") &&
	      now <= span[i].getAttribute("data-end")) {
	    span[i].className = "highlight";
	  } else {
	    span[i].className = "";
	  }
	}
});