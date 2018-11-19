/**
 * Created by zhihangjishu on 17/6/30.
 */
function getImg(){
		$.ajax({
		                url:"https://wangch/roomctl/website/randomLawyer",
		                type:"get",
		                data:'',
		                success:function(data){
		                	var imgbox=''
		                   for(var i=0;i<data.length;i++){
		                   	if (i==data.length) {
		                   		imgbox+='<li><a href=https://'+data[i].domainName+'><img src="'+data[i].pcImg+'?imageView2/1/w/248/h/220/q/75"></a><p>'+data[i].lawyerName+'</p></li><div class="clearfix></div>'
		                   	}else{
		                   	imgbox+='<li><a href=https://'+data[i].domainName+'><img src="'+data[i].pcImg+'?imageView2/1/w/248/h/220/q/75"></a><p>'+data[i].lawyerName+'</p></li>'
		                    }
		                   }
		                   $('#img_slider').html(imgbox);
		                }
		});
	};
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.slider-panel').length;
    //将除了第一张图片隐藏
    $('.slider-panel:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-item:first').addClass('slider-item-selected');
    //隐藏向前、向后翻按钮
    $('.slider-page').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.slider-panel, .slider-pre, .slider-next').hover(function() {
        stop();
        $('.slider-page').show();
    }, function() {
        $('.slider-page').hide();
        start();
    });
    $('.slider-item').hover(function(e) {
        stop();
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    $('.slider-pre').unbind('click');
    $('.slider-pre').bind('click', function() {
        pre();
    });
    $('.slider-next').unbind('click');
    $('.slider-next').bind('click', function() {
        next();
    });
    /**
     * 向前翻页
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * 向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    /**
     * 开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /**
     * 停止轮播
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();
});
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.slider-panels').length;
    //将除了第一张图片隐藏
    $('.slider-panels:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-items:first').addClass('slider-item-selecteds');
    //隐藏向前、向后翻按钮
    $('.slider-pages').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.slider-panels, .slider-pres, .slider-nexts').hover(function() {
        stop();
        $('.slider-pages').show();
    }, function() {
        $('.slider-pages').hide();
        start();
    });
    $('.slider-items').hover(function(e) {
        stop();
        var preIndex = $(".slider-items").filter(".slider-item-selecteds").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    $('.slider-pres').unbind('click');
    $('.slider-pres').bind('click', function() {
        pre();
    });
    $('.slider-nexts').unbind('click');
    $('.slider-nexts').bind('click', function() {
        next();
    });
    /**
     * 向前翻页
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * 向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.slider-panels').eq(preIndex).hide()
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-items').removeClass('slider-item-selecteds');
        $('.slider-items').eq(currentIndex).addClass('slider-item-selecteds');
    }
    /**
     * 开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /**
     * 停止轮播
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();
});
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.slider-panelss').length;
    //将除了第一张图片隐藏
    $('.slider-panelss:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-itemss:first').addClass('slider-item-selectedss');
    //隐藏向前、向后翻按钮
    $('.slider-pagess').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.slider-panelss, .slider-press, .slider-nextss').hover(function() {
        stop();
        $('.slider-pagess').show();
    }, function() {
        $('.slider-pagess').hide();
        start();
    });
    $('.slider-itemss').hover(function(e) {
        stop();
        var preIndex = $(".slider-itemss").filter(".slider-item-selectedss").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    $('.slider-press').unbind('click');
    $('.slider-press').bind('click', function() {
        pre();
    });
    $('.slider-nextss').unbind('click');
    $('.slider-nextss').bind('click', function() {
        next();
    });
    /**
     * 向前翻页
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * 向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.slider-panelss').eq(preIndex).hide()
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-itemss').removeClass('slider-item-selectedss');
        $('.slider-itemss').eq(currentIndex).addClass('slider-item-selectedss');
    }
    /**
     * 开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /**
     * 停止轮播
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();
});