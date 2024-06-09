const btnMenu = document.querySelector("#menuIcon");
const sidebar = document.querySelector("#sidebar");
const closeIcon = document.querySelector("#closeIcon");
const sidebarBackground = document.querySelector("#sidebarBackground");

btnMenu.addEventListener("click", function () {
  console.log("menu button clicked");
  //sidebar.style.display = "block";
  sidebarBackground.style.visibility = "visible";
  sidebar.style.right = "0";
});

closeIcon.addEventListener("click", function () {
  console.log("close Icon Clicked");
  //sidebar.style.display = "none";
  sidebarBackground.style.visibility = "hidden";
  sidebar.style.right = "-200px";
});

sidebarBackground.addEventListener("click", function () {
  console.log("Sidebar Background Clicked");
  sidebarBackground.style.visibility = "hidden";
  sidebar.style.right = "-200px";
});
