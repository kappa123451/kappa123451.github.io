function showDay(dayId) {
  // Hide main image
  const mainImage = document.querySelector('.picture');
  if (mainImage) {
    mainImage.style.display = 'none';
  }

  // Hide all day-content sections
  const sections = document.querySelectorAll('.day-content');
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  // Show selected section
  const selected = document.getElementById(dayId);
  if (selected) {
    selected.classList.add('active');
    selected.style.display = 'block';
  }
}

// New function: go back to home (main image)
function goHome() {
  // Show the main image
  const mainImage = document.querySelector('.picture');
  if (mainImage) {
    mainImage.style.display = 'block';
  }

  // Hide all day-content sections
  const sections = document.querySelectorAll('.day-content');
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });
}

window.onload = () => {
  goHome(); // Show only main image by default
};
