window.addEventListener("scroll", function () {
	// Get the distance from the top of the page
	var distanceFromTop = window.scrollY;

	// Check if the user has scrolled to the desired section
	if (distanceFromTop > 100) {
		// Add class to element to trigger animation
		document.querySelector(".lloyd-portrait-container").classList.remove("hidden");
		document.querySelector(".lloyd-portrait-container").classList.add("fade-in");
	}
});
