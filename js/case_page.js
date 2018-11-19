  /* 动态写入数据 */
 function view(data){
var html_top='';
var 	html_middle_left='';
var 	html_middle_right='';
var html_bottom='';
  for(var i = 0; i< data.length;i++) {
  	if(i<=2){
    html_top+='<a href=https://'+data[i].domainName+'>'
						html_top+='<div class="box">'
							html_top+='<div style="background-image: url('+data[i].phoneImg+'?imageView2/1/w/248/h/220/q/75);"></div>'
							html_top+='<div>'
								html_top+='<h2>'+data[i].siteName+'</h2>'
								html_top+='<p>执业机构：'+data[i].firmName+'</p>'
								html_top+='<div></div>'
							html_top+='</div>'
						html_top+='</div>'
					html_top+='</a>'	
	if (i==(data.length-1)) {
		 html_top+='<div class="clearfix"></div>'
  	  }
	}
  	if (i==3) {
  	 	html_middle_left+='<a href=https://'+data[i].domainName+'>'
						html_middle_left+='<div class="box">'
							html_middle_left+='<div style="background-image: url('+data[i].pcImg+');width:640px;bakground-size:100% 100%;"></div>'
							html_middle_left+='<div>'
								html_middle_left+='<h2>'+data[i].siteName+'</h2>'
								html_middle_left+='<p>执业机构:'+data[i].firmName+'</p>'
								html_middle_left+='<div></div>'
							html_middle_left+='</div>'
						html_middle_left+='</div>'
					html_middle_left+='</a>'
		if (i==(data.length-1)) {
		 html_middle_left+='<div class="clearfix"></div>'
  	  }			
  	}
  	if (i==4) {
  		html_middle_right+='<a href=https://'+data[i].domainName+' style="float: right;">'
						html_middle_right+='<div class="box">'
							html_middle_right+='<div style="background-image: url('+data[i].phoneImg+'?imageView2/1/w/220/h/248/q/75);"></div>'
							html_middle_right+='<div>'
								html_middle_right+='<h2>'+data[i].siteName+'</h2>'
								html_middle_right+='<p>执业机构：'+data[i].firmName+'</p>'
								html_middle_right+='<div></div>'
							html_middle_right+='</div>'
						html_middle_right+='</div>'
					html_middle_right+='</a><div class="clearfix"></div>'
  	}
  	if(i==5){
  			html_bottom+='<div style="background-image: url('+data[i].pcImg+');background-size: 100% 100%;height:300px;">'
						html_bottom+='<div>'
							html_bottom+='<p>'+data[i].siteName+'</p>'
							html_bottom+='<div></div>'
							html_bottom+='<p>执业机构：'+data[i].firmName+'</p>'
							html_bottom+='<a href=https://'+data[i].domainName+'>阅读详情</a>'
						html_bottom+='</div>'
					html_bottom+='</div>'
  	}
 }
    var top=$('<div class="top"><div>').html(html_top);
    var middle=$('<div class="middle"><div>');
    middle.append(html_middle_left);
    middle.append(html_middle_right);
    var bottom=$('<div class="bottom"><div>').html(html_bottom);
    var section=$('<div class="section"><div>');
    section.append(top);
    section.append(middle);
    section.append(bottom);
    var container = $('<div class="container"><div>').append(section);
    $('#list-wrap').html(container);
    
     $('#case .box').mouseover(function() {
			  	$(this).children('div').children('div:last-child').addClass('animate_border');
			  })	;
			    $('#case .box').mouseleave(function() {
			  	$(this).children('div').children('div:last-child').addClass('animate_borderhide');
			  })	;
 };
function load_Page (pageSize,pageNo) {
			 $.ajax({  
		        url:'https://demo.la4u.cn/roomctl/website/webcase/'+pageSize+'/'+pageNo,  
		        type:'GET',   
		        dataType: 'json',
		        success: function(data) {
		            if(data){
		             view(data.data);
		               $("#ui-page").pagination({
						currentPage:data.page.current,
						totalPage:Math.ceil(data.page.total/6),
						isShow: true,
						count: 7,
						homePageText: "首页",
						endPageText: "尾页",
						prevPageText: "上一页",
						nextPageText: "下一页",
						callback: function(current) {
							set_path(current);	
						}
					});
		            }
		        }
		    });
		}
		function set_path (current) {
			location.href = './case.html?page=' + current;
		}