// Wait for the page to finish loading before running any script
document.addEventListener("DOMContentLoaded", function() {

  // Find the contact form on the page
  const contactForm = document.querySelector(".ff-form-contact");

  // Only run this code if we are on a page with the contact form
  if (contactForm) {
    
    // Find the specific inputs inside the form
    const nameInput = contactForm.querySelector("#yourname");
    const emailInput = contactForm.querySelector("#emailaddr");
    const messageInput = contactForm.querySelector(".message");

    // Listen for when the user tries to submit the form
    contactForm.addEventListener("submit", function(event) {
      
      // Stop the form from sending right away
      event.preventDefault(); 

      // 1. Check if the name field is empty
      if (nameInput.value.trim() === "") {
        alert("Please enter your full name.");
        nameInput.focus(); // Put the cursor in the name field
        return; // Stop the function
      }

      // 2. Check if the email field is empty
      if (emailInput.value.trim() === "") {
        alert("Please enter your email address.");
        emailInput.focus();
        return;
      }

      // 3. Check if the message field is empty
      if (messageInput.value.trim() === "") {
        alert("Please enter your message.");
        messageInput.focus();
        return;
      }

      // 4. If all checks pass:
      alert("Thank you for your message! We'll be in touch soon.");
      
      // Reset the form fields after successful submission
      contactForm.reset();
    });
  }
});