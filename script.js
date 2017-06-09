$(document).ready(function(){
  console.log("Do I work??");
var subtexts = ["Hope you're having a nice day", "The skull bone is connected to the leg bone", "Whom?", "Witty subtext.", "O_o" ];
var random = Math.floor(Math.random()*subtexts.length());
$(#"subtext").text(subtexts[random]);
});
