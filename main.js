let allPlayers = document.getElementById("all-players");
let viewAllButton = document.getElementById("view-all");
let viewAll = document.getElementById("view-all-button");
let menu = document.getElementById("menu");
let close = document.getElementById("close-menu");
let nav = document.getElementById("nav-item");
let login = document.getElementById("login");
let header = document.getElementById("header");

viewAllButton.onclick = function() {
  allPlayers.setAttribute("style", "width: 90%; height: auto; border: none; overflow: visible;");
  viewAll.style.display = "none";
}

menu.onclick = function() {
  nav.style.display = "block";
  menu.style.display = "none";
  close.style.display = "block";
  login.style.display = "none";
  header.style.display = "block";
}
close.onclick = function() {
  nav.style.display = "none";
  menu.style.display = "block";
  close.style.display = "none";
  login.style.display = "block";
  header.style.display = "flex";
}