
	 var str_one = '支持多方视频，附加计时功能,结合会客室白板功能，能颠覆传统见面方式，用科技的力量重新定义律师行业。';
   var str_two = '文档功能：可将文档上传至某个业务频道，同步演示文档，可随时分享，调用文档。';
   var str_four = '成熟的对话框设计，一键实现意见传递与交流，指尖飞跃间达成共识。';
   var str_three = '频道功能：律师可以自由添加频道或在订单处理过程中系统生成频道，将会客室众多功能融合一体。';

   var i = 0;
   var j = 0;
   var m = 0;
   var n = 0;
   function typing_one(){
 	$('.header .header_text>.rotate_right_top').fadeIn();
 	$('.header .header_text>.rotate_right_top').css("animation","spin 1s linear infinite");
   	$('.header .header_text>#divTyping_one').fadeIn();
 
    var divTyping_one = document.getElementById('divTyping_one');
    if (i <= str_one.length) {
     divTyping_one.innerHTML = str_one.slice(0, i++) + '_';
     setTimeout('typing_one()', 200);//递归调用
    }
    else{
     divTyping_one.innerHTML = str_one;//结束打字,移除 _ 光标
    }
   };
    function typing_two(){
    $('.header .header_text>img').fadeOut();
    $('.header .header_text>#divTyping_one').fadeOut();
    $('.header .header_text>.rotate_right_top').fadeOut();
    $('.header .header_text>.line_one').fadeOut();
    $('.header .header_text .line_one_extend').fadeOut();
     $('.header .header_text>.textplay_gif').fadeIn();
    var divTyping_two = document.getElementById('divTyping_text');
    if (j <= str_two.length) {
     divTyping_two.innerHTML = str_two.slice(0, j++) + '_';
     setTimeout('typing_two()', 200);//递归调用
    }
    else{
     divTyping_two.innerHTML = str_two;//结束打字,移除 _ 光标
    }
   }
     function typing_three(){
    $('.header .header_text>.line_one').css({'width':'180px','animation':'none'});
    $('.header .header_text .line_one_extend').css({'width':'170px','animation':'none'});
    $('.header .header_text>.textplay_gif').fadeOut();
    $('.header .header_text>.rotate_right_top').css("animation","none");
    $('.header .header_text>img').fadeIn();
    $('.header .header_text>#divTyping_one').fadeIn();
    $('.header .header_text>.rotate_right_top').fadeIn();
    $('.header .header_text>.line_one').fadeIn();
    $('.header .header_text .line_one_extend').fadeIn();
    $('.header .header_text>.line_two').fadeIn();
    $('.header .header_text .line_two_extend').fadeIn();
    $('.header .header_text>.rotate_right_bottom').fadeIn();
    $('.header .header_text>#divTyping_two').fadeIn();
     	
   	$('.header .header_text>.rotate_left_top').fadeIn();
   	$('.header .header_text>.rotate_right_bottom').css("animation","none");
   	$('.header .header_text>.rotate_left_top').css("animation","spin 1s linear infinite");
    $('.header .header_text>#divTyping_three').fadeIn();
    var divTyping_three= document.getElementById('divTyping_three');
    if (m <= str_three.length) {
     divTyping_three.innerHTML = str_three.slice(0, m++) + '_';
     setTimeout('typing_three()', 200);//递归调用
    }
    else{
     divTyping_three.innerHTML = str_three;//结束打字,移除 _ 光标
    }
   }
      function typing_four(){
    	$('.header .header_text>.rotate_left_bottom').fadeIn();
    		$('.header .header_text>.rotate_left_top').css("animation","none");
    	$('.header .header_text>.rotate_left_bottom').css("animation","spin 1s linear infinite");
     $('.header .header_text>#divTyping_four').fadeIn();
    var divTyping_four = document.getElementById('divTyping_four');
    if (n <= str_four.length) {
     divTyping_four.innerHTML = str_four.slice(0, n++) + '_';
     setTimeout('typing_four()', 200);//递归调用
    }
    else{
     divTyping_four.innerHTML = str_four;//结束打字,移除 _ 光标
    }
   }
   setTimeout('typing_one()',2000);
   setTimeout('typing_two()',15000);
   setTimeout('typing_three()',70000);
   setTimeout('typing_four()',82000);

  