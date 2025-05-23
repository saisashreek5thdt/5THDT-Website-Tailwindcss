document.addEventListener("DOMContentLoaded", () => {
  // Create loader element
  const loader = document.createElement("div");
  loader.className = "page-loader";
  loader.innerHTML = `
    <div class="loader"></div>
  `;
  document.body.appendChild(loader);

  // Simulate loading delay
  setTimeout(() => {
    loader.classList.add("loaded"); // Add class to trigger fade out

    // Optional: Remove the loader from DOM after animation completes
    setTimeout(() => {
      loader.remove();
    }, 500); // Match the transition duration in CSS
  }, 2000);
});