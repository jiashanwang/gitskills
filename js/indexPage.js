$(function (){
	var $li=$("#imgList li");
	var i=0;
	function change(){
		if(i>=$li.length){
			i=0;
		}
	var $list=$($li[i]);
	
		if($list.is(".hidden")){
			$list.removeClass("hidden").siblings().addClass("hidden");		
		}
		i++;	
	}
	setInterval(change,2000);
		$("#p1").click(function (){
		var $li=$("#imgList li:visible");
		
		if($($li).prev().length!==0){
			$($li).addClass("hidden").prev().removeClass();
		}else{
			
			$($li).addClass("hidden");
			$("#imgList li:last").removeClass();
		}
	
		//console.log($li);
	});
	$("#p2").click(function (){
		var $li=$("#imgList li:visible");
		
		if($($li).next().length!==0){
			$($li).addClass("hidden").next().removeClass();
		}else{
			
			$($li).addClass("hidden");
			$("#imgList li:first").removeClass();
		}
	
		//console.log($li);
	});
	
		var $p_list=$("#divP p");
		
		$p_list.click(function (){
			console.log($p_list.indexof());
		});	
			
		
		
	
});