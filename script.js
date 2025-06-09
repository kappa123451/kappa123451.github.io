function showDay(dayId) {
    const sections = document.querySelectorAll('.day-content');
    sections.forEach(section => {
      section.classList.remove('active');
    });
  
    const selected = document.getElementById(dayId);
    if (selected) {
      selected.classList.add('active');
    }
  }
  
  window.onload = () => {
    showDay('dec24');
  };
  