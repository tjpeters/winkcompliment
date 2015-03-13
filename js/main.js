// Our smile and wink classes
var smile = 'icon-emo-happy the-icons';
var wink = 'icon-emo-wink the-icons';

// Listen for orientation changes
window.addEventListener("orientationchange", function() {
  doWink();
}, false);

function showWink() {
  document.getElementById('myIcon').className = wink;
  document.getElementById('myCompliment').innerHTML = '';

  setTimeout(showSmile, 500);
}

function showSmile() {
  document.getElementById('myIcon').className = smile;

  // Show a random compliment
  var randomNumber = Math.floor(Math.random()*compliments.length);
  var compliment = '"' + compliments[randomNumber] + '"';
  document.getElementById('myCompliment').innerHTML = compliment;
}

function doWink() {
  setTimeout(showWink, 100);
};
