function toggleMenu() {
  // Get the navigation links element
  const navlinks = document.getElementById("navlinks");

  // Toggle the 'active' class
  if (navlinks) {
    navlinks.classList.toggle("active");
  } else {
    console.error("Element with ID 'navlinks' not found.");
  }
}

