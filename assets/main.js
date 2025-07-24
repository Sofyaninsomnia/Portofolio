document.addEventListener("DOMContentLoaded", function () {
  const sidebarMenu = document.getElementById("sidebarMenu");
  const menuIcon = document.getElementById("menuIcon");

  if (sidebarMenu && menuIcon) {
    sidebarMenu.addEventListener("show.bs.offcanvas", function () {
      menuIcon.classList.remove("bi-list");
      menuIcon.classList.add("bi-x");
    });

    sidebarMenu.addEventListener("hide.bs.offcanvas", function () {
      menuIcon.classList.remove("bi-x");
      menuIcon.classList.add("bi-list");
    });
  }
  
});



