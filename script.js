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
