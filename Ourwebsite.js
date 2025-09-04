const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill in all fields.";
        status.className = "error";
      } 
      else {
        status.textContent = "Message sent successfully!";
        status.className = "success";
        status.email="thangarajdivya23@gmail.com"
        form.reset();
      }
    });