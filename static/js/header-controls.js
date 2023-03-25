function toggleMobileHeader() {
  if (document.getElementById("header").classList.contains("active")) {
    document.getElementById("header").classList.remove("active");
  } else {
    document.getElementById("header").classList.add("active");
  }
}

function showMobileHeader() {
  document.getElementById("header").classList.add("active");
}

function hideMobileHeader() {
  document.getElementById("header").classList.remove("active");
}
