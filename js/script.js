// JavaScript Document

//	Feature Detection For WebCam Access

function hasGetUserMedia() {
  // Note: Opera is unprefixed.
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
 	gotAccess();
} else {
  alert('getUserMedia() is not supported in your browser');
}

//	GotAccess Function

function gotAccess(){
	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
	navigator.mozGetUserMedia || navigator.msGetUserMedia;
	var video = document.querySelector('video');
	if (navigator.getUserMedia) {
	  navigator.getUserMedia({audio: true, video: true}, function(stream) {
		video.src = window.URL.createObjectURL(stream);
		currentStream=stream;
		stream.record();
	  }, onFailSoHard);
	} else {
		// Show Fallback
	}

}
jQuery(function($){
	$('#stop-button').click(function(){
		currentStream.stop();
currentStream.getRecordedData(function(blob) {
alert('Checking');
//upload blobusing XHR2.
});
	})
})

function onFailSoHard(){
	console.log("There Was An Error");
}