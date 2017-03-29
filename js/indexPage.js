$(function (){
	var $li=$("#imgList li");
	console.log($li.length);
	var i=0;
	var $p_list=$("#divP p");
	function change(){
		if(i>=$li.length){
			i=0;
		}
		var $list=$($li[i]);
		toggle($("#imgList li:visible").index());
		// for (var j=0;j<$p_list.length;j++){
		// 	if($("#imgList li:visible").index()==j){
		// 		$($p_list[j]).css("background","red").siblings().css("background","#fff");
		// 	}
		// }
		// console.log($("#imgList li:visible").index());
		if($list.is(".hidden")){
			console.log($list.index());
			$list.removeClass("hidden").siblings().addClass("hidden");		
		}
		i++;	
	}
	setInterval(change,2000);
	$("#p1").click(function (){
		var $li=$("#imgList li:visible");
		toggle($li.index());
		if($($li).prev().length!==0){
			$($li).addClass("hidden").prev().removeClass();
		}else{
			$($li).addClass("hidden");
			$("#imgList li:last").removeClass();
		}
	});
	$("#p2").click(function (){
		var $li=$("#imgList li:visible");
		toggle($li.index());
		if($($li).next().length!==0){
			$($li).addClass("hidden").next().removeClass();
		}else{
			
			$($li).addClass("hidden");
			$("#imgList li:first").removeClass();
		}
	});
	function toggle(index){
		for (var j=0;j<$p_list.length;j++){
			if(index==j){
				$($p_list[j]).css("background","red").siblings().css("background","#fff");
			}
		} 
	};
	$("#divP").on("click","p",function (){
		console.log($(this).index());
		$(this).css("background","red").siblings().css("background","#fff");
		changeIndex($(this).index());
	});
	function changeIndex(index){
		for (var i=0;i<$li.length;i++){
			if (index==i){
				if($($li[i]).is(".hidden")){
					$($li[i]).removeClass("hidden").siblings().addClass("hidden");
				}
				
			}
		}
	}
});