const navbarExtraOption1 = document.getElementById("navbar_extra_option1");
const navbarExtraOption2 = document.getElementById("navbar_extra_option2");

const navbarExtraOption1Container = document.getElementById(
  "navbar_extra_option1_container"
);
const navbarExtraOption2Container = document.getElementById(
  "navbar_extra_option2_container"
);

navbarExtraOption1.addEventListener("click", (e) => {
  if (navbarExtraOption1Container.style.display == "") {
    navbarExtraOption1Container.style.display = "block";
    navbarExtraOption2Container.style.display = "";
  } else {
    navbarExtraOption1Container.style.display = "";
  }
});

navbarExtraOption2.addEventListener("click", (e) => {
  if (navbarExtraOption2Container.style.display == "") {
    navbarExtraOption2Container.style.display = "block";
    navbarExtraOption1Container.style.display = "";
  } else {
    navbarExtraOption2Container.style.display = "";
  }
});

window.addEventListener("mouseup", (e) => {
  if (navbarExtraOption1Container.style.display == "block") {
    navbarExtraOption1Container.style.display = "";
  }
  if (navbarExtraOption2Container.style.display == "block") {
    navbarExtraOption2Container.style.display = "";
  }
});

const navbarContainer = document.getElementById("navbar_container");

document.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  let height = window.scrollY;

  if (height > 150) {
    navbarContainer.style.backgroundColor = "white";
    navbarContainer.style.color = "black";
    navbarContainer.style.boxShadow = "0px -7px 11px 5px black";
  } else {
    navbarContainer.style.backgroundColor = "transparent";
    navbarContainer.style.color = "white";
    navbarContainer.style.boxShadow = "none";
  }
});
