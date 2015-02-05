function showCountdown() {
    var countDiv = document.getElementById("countdownDiv");
    countDiv.innerHTML = genCountdown();
}

function genCountdown() {
    var html = "";
    var i = 0;
    var hClass = "hot";

    for (i = 10; i > 0; i--) {
  if (i > 8) {
            hClass = "cold";
  } else if (i > 6) {
            hClass = "cool";
  } else if (i > 3) {
            hClass = "warm";
  } else {
            hClass = "hot";
  }

  // NOTE THE USE OF BACK SLASHES TO PUT QUOTES IN THE GENERATED HTML
  html += "<h2 class=\"" + hClass + "\">" + i + "</h2>";
    }     // END OF for LOOP

    html += "<h1 class=\"blastOff\">Blast Off!</h1>";
    return html;
}
