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

    var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); 
}
    // Event listener for window resize
    window.addEventListener('resize', updateContent);