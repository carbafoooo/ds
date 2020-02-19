$(".slide-nav").on("click", function(e) {
	e.preventDefault();
	// get current slide

	var current = $(".flex--active").data("slide");
	// get button data-slide
	// var next = $(this).data('slide');
	var next = 2;

	if (current === next) {
		return false;
	} else {
		$(".slider__warpper")
			.find(".flex__container[data-slide=" + next + "]")
			.addClass("flex--preStart");
		$(".flex--active").addClass("animate--end");
		setTimeout(function() {
			$(".flex--preStart")
				.removeClass("animate--start flex--preStart")
				.addClass("flex--active");
			$(".animate--end")
				.addClass("animate--start")
				.removeClass("animate--end flex--active");
		}, 800);
	}
});

const current = $(".flex--active").data("slide");
var next = $(".slide-nav").data("slide");

setInterval(() => {}, 3000);
