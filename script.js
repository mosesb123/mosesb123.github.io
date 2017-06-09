$(document).ready(function() {
  console.log("PLEASE!");
var subtexts = ["Hope you're having a nice day", "The skull bone is connected to the leg bone", "Whom?", "Clever subtext." ];
var random = Math.floor(Math.random()*subtexts.length);
$('#subtext').text(subtexts[random]);
});
