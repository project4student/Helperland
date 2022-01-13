$(document).ready(() => {
	$(".navbar .hamburger").click(() => {
		$(".nav").toggleClass("open");
		$("body").css("overflow", "hidden");
		$(".backblack").toggleClass("open");
		$(".hamburger").toggleClass("toggle");
	});
	$(".backblack").click(() => {
		$(".nav").toggleClass("open");
		$(".backblack").toggleClass("open");
		$(".hamburger").toggleClass("toggle");
		$("body").css("overflow", "auto");
	});
	document.querySelector(".backblack").addEventListener("wheel", () => {
		$(".nav").removeClass("open");
		$(".backblack").removeClass("open");
		$(".hamburger").removeClass("toggle");
		$("body").css("overflow", "auto");
	});

	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl, { sanitize: false });
	});

	$(".down").click((e) => {
		$e = e.target;
		$($e).parent().next().addClass("clicked");
		$(".down").each((i, element) => {
			$element = element;
			if ($($element).parent().next().css("display") == "block") {
				$($element).parent().next().slideUp(500);
				$($element).toggleClass("rotate-0");
			} else if (($($element).parent().next().css("display") == "none") & $($element).parent().next().is(".clicked")) {
				$($e).parent().next().slideDown(500);
				$($element).toggleClass("rotate-0");
			}
		});
		$($e).parent().next().removeClass("clicked");
	});
	function current_section() {
		$("#left").toggleClass("current-section");
		$("#right").toggleClass("current-section");
		if ($("#left").attr("class") == "current-section") {
			$(".customer-box").delay(700).fadeToggle(700);
			$(".service-box").fadeToggle(700);
		} else {
			$(".customer-box").fadeToggle(700);
			$(".service-box").delay(700).fadeToggle(700);
		}
	}
	$("#left").click(current_section);
	$("#right").click(current_section);
});
