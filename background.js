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
