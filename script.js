function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

const toggleMenu = () => {
      const menu = document.getElementById('menu');
      menu.classList.toggle('show');
    };

    // Example: Dynamically update content based on screen size
    const updateContent = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        document.getElementById('content').textContent = 'Small Screen Content';
      } else {
        document.getElementById('content').textContent = 'Large Screen Content';
      }
    };

    // Event listener for window resize
    window.addEventListener('resize', updateContent);