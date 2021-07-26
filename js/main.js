  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".nav-menu");

  menuButton.addEventListener("click", () => {
      menu.classList.add("is-active");
  });
