(function () {
	$(document).ready(function () {
        $('.container>.section:nth-child(2)').hide();
		$('.container>.menu>div:nth-child(2)').click(function () {
			 $('.container>.section').hide();
			$('.container>.menu').hide();
			$('.container>.section:nth-child(2)').show();
			
		});
		$('.container>.menu>div:nth-child(3)').click(function () {
			$('.container>.section').hide();
			$('.container>.menu').hide();
			$('.container>.section:nth-child(3)').show();
		});
		$('.container>.menu>div:nth-child(4)').click(function () {
			$('.container>.section').hide();
			$('.container>.menu').hide();
			$('.container>.section:nth-child(4)').show();
		});
		$('.container>.menu>div:nth-child(5)').click(function () {
			$('.container>.section').hide();
			$('.container>.menu').hide();
			$('container>.section:nth-child(5)').show();
		});
	});
})();
