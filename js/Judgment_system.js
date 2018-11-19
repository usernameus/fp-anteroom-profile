
window.onload = function() {
	var system ={
		win : false,
		mac : false,
		xll : false
		};
		//检测平台
		var p = navigator.platform;
		system.win = p.indexOf("Win") == 0;
		system.mac = p.indexOf("Mac") == 0;
		system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
		//跳转语句
		if(system.win||system.mac||system.xll){
			var path= window.location.href;
			if (path.indexOf('/mobile') >= 0) {
				window.location.href=path.replace("/mobile", "");
			} 
		}else{
		var path= window.location.href;
			if (!(path.indexOf('/mobile') >= 0)) {
			var index = window.location.pathname.lastIndexOf("\/");  
			var arr=window.location.pathname.split('');
			arr.splice(index,index,'/mobile/');
			arr.join('');
				window.location.href=arr;
			} 
		}
}