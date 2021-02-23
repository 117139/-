var setTime_obj = '';
$(window).resize(function() { //当浏览器大小变化时
	clearTimeout(setTime_obj)
	if ($(window).width() > 1200) {
		setTime_obj = setTimeout(function() {
			window.location.reload()
		}, 200)
	}

});
