(function() {
var buy={
	addstyle:function (e){
			$("#buy>.container>.top>div:last-child>div").removeClass("colorchange");
		    $(e).addClass("colorchange");
		    $("#buy>.container>.top>div:last-child>div>p:first-child").removeClass("changered");
		    $(e).children("p:first-child").addClass("changered");
 },
	colorchange:function (e){
	       $(e).addClass("colorchange");
	       $(e).children("p:first-child").addClass("changered");
	},
}	
$(document).ready(function(){
	  buy.colorchange("#addStyle_center");
	  $("#addStyle_left").mouseover(function () {
	  	buy.addstyle(this)
	  });
	   $("#addStyle_center").mouseover(function () {
	  	buy.addstyle(this)
	  });
	   $("#addStyle_right").mouseover(function () {
	  	buy.addstyle(this)
	  });
  });
})();
