function playEpisode(episode) {
  // Get audio element
  var audio = document.getElementById(`episode${episode}`);

  // Play or pause audio
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

document.getElementById('menu-button').addEventListener('click', function() {
  document.getElementById('contactf').style.display = 'block';
});

// Validate contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate form
  if (name == "" || email == "" || message == "") {
    alert("Please fill out all required fields");
    event.preventDefault();
  }
});
