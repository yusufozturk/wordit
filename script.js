$(document).ready(function() {
    let isMusicPlaying = false; // Muted by default
  const musicPlayer = document.getElementById("game-music");

  $("#toggle-music").click(function() {
    isMusicPlaying = !isMusicPlaying;
    if (isMusicPlaying) {
      musicPlayer.play();
    } else {
      musicPlayer.pause();
    }
    $(this).text(isMusicPlaying ? "🔊" : "🔈");
  });

  let nickname = "";
  let roomId = "";
  let playerCount = 0;
  
    $("#start-game").click(function() {
      nickname = $("#nickname").val();
      if (nickname !== "") {
        $("#nickname-container").hide();
        $("#welcome-message").text("Welcome " + nickname + "!");
        $("#welcome-message").show();
        $("#menu").show();
      }
    });
  
    $("#create-room").click(function() {
      // Create a room
      $("#player-info").hide(); // Corrected this line
      $("#game-board").show(); 

      var color = ["#999999"]; // Gray color
///////////////////////////////////////////////////////////////////////////
////////////// Initiate SVG and create hexagon centers ////////////////////
///////////////////////////////////////////////////////////////////////////

//Function to call when you mouseover a node
function mover(d) {
var el = d3.select(this)
.transition()
.duration(10)		  
.style("fill-opacity", 0.3)
;
}

//Mouseout function
function mout(d) { 
var el = d3.select(this)
.transition()
.duration(1000)
.style("fill-opacity", 1)
;
};

// SVG sizes and margins
var margin = {
  top: 30,
  right: 20,
  bottom: 20,
  left: 50
};

var width = 850;
var height = 350;

// The number of columns and rows of the heatmap
var MapColumns = 12,
  MapRows = 15;

// The maximum radius the hexagons can have to still fit the screen
var hexRadius = d3.min([width / ((MapColumns + 0.5) * Math.sqrt(3)),
height / ((MapRows + 1 / 3) * 1.5)]) * 2; // Double the size

// Set the new height and width of the SVG based on the max possible
width = MapColumns * hexRadius * Math.sqrt(3);
height = MapRows * 1.5 * hexRadius + 0.5 * hexRadius;

//Set the hexagon radius
var hexbin = d3.hexbin()
.radius(hexRadius);

//Calculate the center positions of each hexagon	
var points = [];
for (var i = 0; i < MapRows; i++) {
for (var j = 0; j < MapColumns; j++) {
var x = hexRadius * j * Math.sqrt(3)
//Offset each uneven row by half of a "hex-width" to the right
if(i%2 === 1) x += (hexRadius * Math.sqrt(3))/2
var y = hexRadius * i * 1.5
points.push([x,y])
}//for j
}//for i

//Create SVG element
var svg = d3.select("#chart").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

///////////////////////////////////////////////////////////////////////////
////////////////////// Draw hexagons and color them ///////////////////////
///////////////////////////////////////////////////////////////////////////

//Start drawing the hexagons
svg.append("g")
.selectAll(".hexagon")
.data(hexbin(points))
.enter().append("path")
.attr("class", "hexagon")
.attr("d", function (d) {
return "M" + d.x + "," + d.y + hexbin.hexagon();
})
.attr("stroke", function (d,i) {
return "#fff";
})
.attr("stroke-width", "1px")
.style("fill", color[0]) // Use the gray color
.on("mouseover", mover)
.on("mouseout", mout);

    });
  
    $("#join-room").click(function() {
      $("#room-inputs").show(); // Corrected this line
      $("#menu").hide(); // Hide the main menu
    });
  
    $("#join-room-button").click(function() {
      // Join a room
    });
  });
  