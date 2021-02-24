var setTime_obj = '';
$(window).resize(function() { //当浏览器大小变化时
	clearTimeout(setTime_obj)
	if ($(window).width() > 1200) {
		setTime_obj = setTimeout(function() {
			window.location.reload()
		}, 200)
	}

});

/**
 * 页面传参
 * @returns {Object}
 */
function getNowCanshu() {
  var aa = window.location.href;//返回当前页面的url
  var urlinfo = aa.replace("#", " ");
  var canshu = function() {
    var ind = urlinfo.indexOf('?');//返回某个指定的字符串值在字符串中首次出现的位置
    var cs = urlinfo.substr(ind + 1);
    var tempobj = new Object();
    var csarr = cs.split("&");
    jQuery.each(csarr, function(i, v) {
      var temparr = v.split("=");
      var objname = temparr[0];
      tempobj[objname] = temparr[1];
    });
    return tempobj;
  }();
  return canshu;
}