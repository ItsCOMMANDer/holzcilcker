function toggleHamMenu() {
      const menuButton = document.getElementById("menuItems");

      if(menuButton.style.display == "block") {
        new Audio("./files/disappear.mp3").play();
        menuButton.style.display = "none";
      } else {
        new Audio("./files/plop.mp3").play();
        menuButton.style.display = "block";
      }

}