document.addEventListener('DOMContentLoaded', function() {
  // 1. Target all your content panels
  const panels = document.querySelectorAll('.panel');
  
  // 2. ⚡ FIX: Target your actual sidebar links using their class
  const navLinks = document.querySelectorAll('.navItem');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevents the page from jumping down

      // 3. Hide all open panels across the entire website
      panels.forEach(panel => {
        panel.classList.remove('show');
      });

      // 4. Extract the target ID from the href (e.g., "#W2a1astart" becomes "W2a1astart")
      const targetId = this.getAttribute('href').slice(1);
      const targetPanel = document.getElementById(targetId);
      
      // 5. Reveal the requested panel
      if (targetPanel) {
        targetPanel.classList.add('show');
      }
    });
  });
});

