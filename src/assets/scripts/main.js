/*

	MVP
	1. load audio
	2. play audio
	3. analyze audio
	4. load more audio
	5. analyze

	1.

	load audio with buffer
	create audio sample
	play audio sample

 */

var _trackBuffer = null;
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();


loadSound('assets/audio/01.mp3', function(){

	playSound(_trackBuffer);
});

function loadSound(url, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.responseType = 'arraybuffer';

	// Decode asynchronously
	request.onload = function() {
		context.decodeAudioData(request.response, function(buffer) {
			_trackBuffer = buffer;
			callback();
		}, onError);
	};

	request.send();

	function onError(e) {
		console.error('Something went wrong while decoding the audio', e)
	}
}

function playSound(buffer) {

	var source = context.createBufferSource(); // creates a sound source
	source.buffer = buffer;                    // tell the source which sound to play
	source.connect(context.destination);       // connect the source to the context's destination (the speakers)
	source.start(0);                           // play the source now
}
