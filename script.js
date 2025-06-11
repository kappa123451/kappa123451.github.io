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

  // Handle sidebars
  const sidebarMelbourne = document.getElementById('sidebar-melbourne');
  const sidebarSydney = document.getElementById('sidebar-sydney');

  if (sidebarMelbourne) {
    sidebarMelbourne.style.display = dayId === 'Melbourne' ? 'block' : 'none';
    sidebarMelbourne.classList.remove('show'); // Ensure hidden initially
  }

  if (sidebarSydney) {
    sidebarSydney.style.display = dayId === 'Sydney' ? 'block' : 'none';
    sidebarSydney.classList.remove('show'); // Ensure hidden initially
  }

  // Show sidebar toggle button on mobile
  const toggleButton = document.getElementById('sidebar-toggle');
  if (toggleButton) {
    toggleButton.style.display = window.innerWidth <= 768 ? 'block' : 'none';
  }
}

function goHome() {
  // Show main image
  const mainImage = document.querySelector('.picture');
  if (mainImage) {
    mainImage.style.display = 'block';
  }

  // Hide all day content
  const sections = document.querySelectorAll('.day-content');
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  // Hide both sidebars
  const sidebarMelbourne = document.getElementById('sidebar-melbourne');
  const sidebarSydney = document.getElementById('sidebar-sydney');
  if (sidebarMelbourne) {
    sidebarMelbourne.style.display = 'none';
    sidebarMelbourne.classList.remove('show');
  }
  if (sidebarSydney) {
    sidebarSydney.style.display = 'none';
    sidebarSydney.classList.remove('show');
  }

  // Hide toggle button
  const toggleButton = document.getElementById('sidebar-toggle');
  if (toggleButton) toggleButton.style.display = 'none';
}

function toggleSidebar() {
  const sidebarMelbourne = document.getElementById('sidebar-melbourne');
  const sidebarSydney = document.getElementById('sidebar-sydney');

  [sidebarMelbourne, sidebarSydney].forEach(sidebar => {
    if (sidebar && sidebar.style.display === 'block') {
      sidebar.classList.toggle('show');
    } else if (sidebar) {
      sidebar.classList.remove('show');
    }
  });
}

// Set initial state when page loads
window.onload = () => {
  goHome();
};
