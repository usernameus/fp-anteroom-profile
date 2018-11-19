(function  () {
function submitform(formvalue) {
		$.ajax({
			url: "https://www.falvplus.com/sectoken/antbill",
			type: "get",
			data:formvalue,
			success: function(data) {
				window.location.href='http://wpa.qq.com/msgrd?v=3&uin=3353280744&site=qq&menu=yes'
			}
		});
}
	$(document).ready(function  () {
		$("#modeFormId").click(function() {
					var formvalue={
						name:$("#mode_name").val(),
					    phone:$("#mode_phone").val(),
					    occupationTime:$("#mode_zhiye").val(),
					    cctotal:$("#mode_goumai").val(),
					    duration:$("#goumai_time:checked").val()
					};
//					if (formvalue.name && formvalue.phone && formvalue.remarks) {
						 submitform(formvalue);	
//					}		
				});
	});			
	})();