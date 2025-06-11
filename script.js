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

  // Sidebar control
  const sidebarMelbourne = document.getElementById('sidebar-melbourne');
  const sidebarSydney = document.getElementById('sidebar-sydney');

  if (sidebarMelbourne) {
    sidebarMelbourne.style.display = dayId === 'Melbourne' ? 'block' : 'none';
  }

  if (sidebarSydney) {
    sidebarSydney.style.display = dayId === 'Sydney' ? 'block' : 'none';
  }
}

function goHome() {
  const mainImage = document.querySelector('.picture');
  if (mainImage) {
    mainImage.style.display = 'block';
  }

  const sections = document.querySelectorAll('.day-content');
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  const sidebarMelbourne = document.getElementById('sidebar-melbourne');
  const sidebarSydney = document.getElementById('sidebar-sydney');

  if (sidebarMelbourne) sidebarMelbourne.style.display = 'none';
  if (sidebarSydney) sidebarSydney.style.display = 'none';
}

window.onload = () => {
  goHome();
};

function showDay(dayId) {
  const mainImage = document.querySelector('.picture');
  if (mainImage) {
    mainImage.style.display = 'none';
  }

  const sections = document.querySelectorAll('.day-content');
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  const selected = document.getElementById(dayId);
  if (selected) {
    selected.classList.add('active');
    selected.style.display = 'block';
  }

  const sidebarMelbourne = document.getElementById('sidebar-melbourne');
  const sidebarSydney = document.getElementById('sidebar-sydney');

  if (sidebarMelbourne) {
    sidebarMelbourne.style.display = dayId === 'Melbourne' ? 'block' : 'none';
    sidebarMelbourne.classList.remove('show'); // Reset
  }
  if (sidebarSydney) {
    sidebarSydney.style.display = dayId === 'Sydney' ? 'block' : 'none';
    sidebarSydney.classList.remove('show'); // Reset
  }

  // ✅ Show sidebar toggle only on day views
  const toggleButton = document.getElementById('sidebar-toggle');
  if (toggleButton) toggleButton.style.display = 'block';
}


function goHome() {
  const mainImage = document.querySelector('.picture');
  if (mainImage) {
    mainImage.style.display = 'block';
  }

  const sections = document.querySelectorAll('.day-content');
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  const sidebarMelbourne = document.getElementById('sidebar-melbourne');
  const sidebarSydney = document.getElementById('sidebar-sydney');
  if (sidebarMelbourne) sidebarMelbourne.style.display = 'none';
  if (sidebarSydney) sidebarSydney.style.display = 'none';

  // ✅ Hide sidebar toggle on main page
  const toggleButton = document.getElementById('sidebar-toggle');
  if (toggleButton) toggleButton.style.display = 'none';
}


window.onload = () => {
  goHome();
};

function toggleSidebar() {
  const melbourneSidebar = document.getElementById('sidebar-melbourne');
  const sydneySidebar = document.getElementById('sidebar-sydney');

  // toggle both sidebars, but only show the one that's active
  [melbourneSidebar, sydneySidebar].forEach(sidebar => {
    if (sidebar && sidebar.style.display === 'block') {
      sidebar.classList.toggle('show');
    } else if (sidebar) {
      sidebar.classList.remove('show');
    }
  });
}
