
$(document).ready(function(){ // загрузка Dom
    
	$(".input").keyup(function(){ // из input считываем keyup
        
var	textText = $(".input").val(); // в переменную заносит input
var expr = new RegExp(textText, 'ig');
	
	    $("div.container li").each(function(){				//перебирает li показываем скрываем
				hzg = $(this).text();
				if(hzg.match(expr) == null){$(this).hide();}
				else{$(this).show();}	
		});
ulTest();
		function ulTest(){		
				var classId = ["ul.block-a", "ul.block-b", "ul.block-c", "ul.block-d"];
				
					$("div.container ul").each(function(){$(this).show();})
					
				for(var i=0; i<4;i++){
				if($(classId[i] +" li:visible").length == 0){
						$(classId[i]).hide();
				}else{
						$(classId[i]).show();
				};
				}	
			}
});

    
$("batton").click(function(){
    $("#categori").slideToggle("slow");
    });
    
$('#categori ul li').click(function (event) {
   $("#categori ul li").removeClass('active');
   $(this).addClass('active');
   
    
   t=event.target.id||event.srcElement.id;
 var classId = [".block-a", ".block-b", ".block-c", ".block-d", ".block-all"];
   $(".block-a, .block-b, .block-c, .block-d").hide();
        for(var i=0;i<classId.length; i++){   
            if(t == classId[i]){
                $(classId[i]).show();
                
                
            }
            else if(t == ".block-all"){
                $(".block-a, .block-b, .block-c, .block-d").show();
            }
            else{
                $(classId[i]).hide()
            };
        }
   });
    

VK.Widgets.Comments("vk_comments", {limit: 10, width: "665", attach: "video,audio,link"});   

});

