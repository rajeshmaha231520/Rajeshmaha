// Handle adoption form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert(`Thank you, ${name}! Your adoption request has been submitted.`);
      form.reset(); // Clear form after submission
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });

  // Simple search filter for listings
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search animals or plants...";
  document.body.insertBefore(searchInput, document.body.firstChild);

  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    const listings = document.querySelectorAll(".listing");

    listings.forEach((listing) => {
      const text = listing.textContent.toLowerCase();
      listing.style.display = text.includes(filter) ? "block" : "none";
    });
  });
});

