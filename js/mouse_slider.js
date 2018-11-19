$(function () {              
            //绑定滚动条事件  
              //绑定滚动条事件  
            $(window).bind("scroll", function () {  
                var sTop = $(window).scrollTop();  
                var sTop = parseInt(sTop);  
                if (sTop != 0) {  
                   $('#iframe_nav').css({"background-color":"#000000","opacity":"0.7"});
                }  
                else {  
                    $('#iframe_nav').css("background","rgba(0,0,0,0.1)");
                }   
            });  
        })  