<script>document.addEventListener("DOMContentLoaded", function () {
// Mobile menu toggle
const menuButton = document.querySelector(".menu button");
const mobileMenu = document.querySelector(".lg\\:hidden[role='dialog']");


menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

closeMenuButton.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});

// Dropdown toggles
function setupDropdown(buttonSelector, menuSelector) {
  const button = document.querySelector(buttonSelector);
  const menu = button.nextElementSibling;

  button.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
}

setupDropdown(".dropDown1 button", ".dropDown1 div");
setupDropdown(".dropDown2 button", ".dropDown2 div");
setupDropdown(".dropDown3 button", ".dropDown3 div");

// Mobile dropdowns
function setupMobileDropdown(buttonSelector, menuId) {
  const button = document.querySelector(buttonSelector);
  const menu = document.querySelector(menuId);

  button.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
}

setupMobileDropdown(".aboutM", "#disclosure-1");
setupMobileDropdown(".admissionM", "#disclosure-2");
setupMobileDropdown(".acadM", "#disclosure-3");
});
</script>