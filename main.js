let allPlayers = document.getElementById("all-players");
let viewAllButton = document.getElementById("view-all");
let viewAll = document.getElementById("view-all-button")
viewAllButton.onclick = function() {
  allPlayers.setAttribute("style", "width: 90%; height: auto; border: none; overflow: visible;");
  viewAll.style.display = "none";
}