document.addEventListener("DOMContentLoaded", function(event) {
    var icons = document.querySelectorAll(".icon");

	for (var i = 0; i < icons.length; i++) {
		icons[i].addEventListener('click', function(){
            this.classList.add("active");
        });
		icons[i].addEventListener('mouseout', function(){
            this.classList.remove("active");
        });
	}
});
