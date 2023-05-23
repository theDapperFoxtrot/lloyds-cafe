const minWidth = 446;
const element = document.querySelector(".background-video-landscape-container");

function checkWidth() {
	if (window.innerWidth < minWidth) {
		element.classList.add("hide");
	} else {
		element.classList.remove("hide");
	}
}

window.addEventListener("resize", checkWidth);
checkWidth();

window.addEventListener("resize", checkWidth);
checkWidth();

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
