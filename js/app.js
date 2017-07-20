let vid = document.querySelector('video');
let span = document.getElementsByTagName("span");

vid.volume =.5;
vid.addEventListener('timeupdate', function() {
	let now = vid.currentTime;
	// highlight text as video plays
	for (let i = 0; i < span.length; i++) {
		console.log(now*2);
	  if (now >= span[i].getAttribute("data-start") &&
	      now <= span[i].getAttribute("data-end")) {
	    span[i].className = "highlight";
	  } else {
	    span[i].className = "";
	  }
	}
});