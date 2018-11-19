$(document).ready(function(){
	$("#servicesupport>.container>.left>ul>li:first-child").addClass("left_style");
	$("#servicesupport>.container>.right").addClass("display_no");
	$("#servicesupport>.container>.right:nth-child(2)").removeClass("display_no");
  $("#servicesupport>.container>.left>ul>li").click(function(){
  	$("#servicesupport>.container>.left>ul>li").removeClass("left_style");
    $(this).addClass("left_style");
    switch($(this).html()){
    	 case '版本更新日志':
          $("#servicesupport>.container>.right").addClass("display_no");
    	      $("#servicesupport>.container>.right:nth-child(2)").removeClass("display_no");
         break;
    	case '常见问题':
      	 $("#servicesupport>.container>.right").addClass("display_no");
    	     $("#servicesupport>.container>.right:nth-child(3)").removeClass("display_no");
         break;
     case '常规业务流程':
          $("#servicesupport>.container>.right").addClass("display_no");
    	      $("#servicesupport>.container>.right:nth-child(4)").removeClass("display_no");
         break;
      case '联系客服':
          $("#servicesupport>.container>.right").addClass("display_no");
    	      $("#servicesupport>.container>.right:nth-child(5)").removeClass("display_no");
         break;
      case '个人定制':
          $("#servicesupport>.container>.right").addClass("display_no");
    	      $("#servicesupport>.container>.right:nth-child(6)").removeClass("display_no");
         break;
       };
    });    	
});