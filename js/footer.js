
	 function submitform(datas){
		$.ajax({
		                url:"https://wangch/roomctl/website/potentialUser",
		                type:"get",
		                data:{
			                	name:datas.name,
			                	company:datas.company,
			                	email:datas.email,
			                	phone:datas.phone,
			                	details:datas.details
		                },
		                success:function(data){
		                  var dialog = jDialog.alert('发送成功！',{},{
							showShadow: false,// 不显示对话框阴影
							buttonAlign : 'center',
							events : {
								show : function(evt){
									var dlg = evt.data.dialog;
								},
								close : function(evt){
									var dlg = evt.data.dialog;
								},
								enterKey : function(evt){
									alert('enter key pressed!');
								},
								escKey : function(evt){
									alert('esc key pressed!');
									evt.data.dialog.close();
								}
							}
						  });
		                }
		});
	};
	$(document).ready(function  () {
		$("#submitform").click(function() {
					var formvalue={
						name:$("#name").val(),
					   company:$("#company").val(),
					   email:$("#email").val(),
					    phone:$("#phone").val(),
					   details:$("#details").val(),
					};
					if (formvalue) {
						submitform(formvalue);	
					}	 
				});
	});			
