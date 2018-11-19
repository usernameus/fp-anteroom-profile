$(function() {
	var page = 1; //当前页的页码
	loadPage(page);
	function loadPage(counter) {
		$.ajax({
			type: 'post',
			url: 'https://demo.la4u.cn/roomctl/website/phonewebcase/6/' + counter,
			dataType: 'json',
			success: function(data) {
				var result_one;
				var result_two;
				var result_three = $('<div class="section_boxs"></div>');
				var result_four = $('<div class="section_center"></div>');
				var result_three_son;
				var result_four_son;

				for(var i = 0; i < data.data.length; i++) {
					if(i == 0) {
						result_one += '<div class="section_box" >'
						result_one += '<div class="img_box">'
						result_one += '<div class="img_box_text">'
						result_one += '<h1>' + data.data[i].siteName + '</h1>'
						result_one += '	<h1>' + data.data[i].firmName + '</h1>'
						result_one += '	<div></div>'
						result_one += ' 	<h2>最好的服务</h2>'
						result_one += ' 	<a href=https://' + data.data[i].domainName + ' class="button">前往了解>></a>'
						result_one += '</div>'
						result_one += '</div>'
						result_one += '<div class="img_box">'
						result_one += '<img src=' + data.data[i].phoneImg + '>'
						result_one += '</div>'
						result_one += '<div class="clearfix"></div>'
						result_one += '</div>'
					}
					if(i == 1) {
						result_two += '<div class="section"  style="background-image: url(' + data.data[i].phoneImg + '?imageView2/1/w/248/h/220/q/75);">'
						result_two += '<a href=https://' + data.data[i].domainName + '>'
						result_two += '<div class="section_text">'
						result_two += ' <p>LAWYER</p>'
						result_two += '<p>' + data.data[i].siteName + '</p>'
						result_two += ' <p>' + data.data[i].firmName + '</p>'
						result_two += ' </div>'
						result_two += '</a>'
						result_two += '</div>'
					}
					if(i == 2 || i == 3) {
						result_three_son += '<div class="img_box">'
						result_three_son += '<img src=' + data.data[i].phoneImg + '>'
						result_three_son += '<div class="img_box_text">'
						result_three_son += '<p>' + data.data[i].siteName + '</p>'
						result_three_son += '<p>执业结构：' + data.data[i].firmName + '</p>'
						result_three_son += '</div>'
						result_three_son += '<a href=https://' + data.data[i].domainName + ' class="button">点击了解</a>'
						result_three_son += '</div>'
					}
					if(i == 4 || i == 5) {
						result_four_son += '<div class="img_box">'
						result_four_son += '<img src=' + data.data[i].phoneImg + '>'
						result_four_son += '<div class="img_box_text">'
						result_four_son += '<h3>' + data.data[i].siteName + '</h3>'
						result_four_son += '<p>执业机构：' + data.data[i].firmName + '</p>'
						result_four_son += ' <a href=https://' + data.data[i].domainName + '>前往了解>></a>'
						result_four_son += '</div>'
						result_four_son += '</div>'
					}

				}
				if(counter<=Math.ceil((data.page.total)/6+1)){
                          result_three.append(result_three_son);
						result_four.append(result_four_son);
						$('.container').append(result_one);
						$('.container').append(result_two);
						$('.container').append(result_three);
						$('.container').append(result_four);
                 }

				
			},

		});
		page++;
	}

	function scrollFn() {
		//真实内容的高度
		var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
		//视窗的高度
		var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
		//隐藏的高度
		var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if(pageHeight - viewportHeight - scrollHeight < 500) { //如果满足触发条件，执行
			loadPage(page)
		}
	}
	$(window).bind("scroll", scrollFn); //绑定滚动事件

});