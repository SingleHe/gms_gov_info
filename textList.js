$(function(){
	var liNum = $('.text-list li').length;
	console.log(liNum);
	for(var i=0; i<liNum; i++){
		if(i%5==4){
			$('.text-list li').eq(i).css({
				borderBottom:'dashed 1px #999',
				paddingBottom:'10px',
				marginBottom:'10px',
                backgroundPositionY:'14px'
			})
		}
	}
	
//	leftMenu
     var checkelement=window.location.href;
     var menuLeft=new Array();
     var lengthLeft=$(".text-left").length;
		 
	
	console.log("获得的checkelement为："+checkelement);
	var oCur = $(".text-left");
	var liLength = oCur.find("li").length;
	for(var i=0;i<liLength;i++){
		menuLeft.push(oCur.find('a').eq(i).attr("rel"));
		console.log("获取的a标签下的rel内容为:"+menuLeft[i]);
		if(checkelement.indexOf(menuLeft[i]) != -1){
			oCur.find('li').eq(i).addClass('.leftMenuOn');
			oCur.find('li').eq(i).find('.subMenu').show();
		}else{
			console.log("not matched")
		}
	}
	//左侧当前页选择
	/*for (i = 0; i < lengthLeft; i++) {
		if(checkelement.indexOf($(".text-left").eq(i).attr('rel'))!=-1){
			var oCur = $(".text-left").eq(i);
			var secLength = oCur.find('li').length;
			$(".text-left").hide();
			oCur.show();
			for(var j=0; j<secLength; j++){
				menuLeft.push(oCur.find('a').eq(j).attr("rel"));
				if (checkelement.indexOf(menuLeft[j]) != -1) {
					oCur.find('li').eq(j).addClass('leftMenuOn');
					oCur.find('li').eq(j).find('.subMenu').show();
				};
			}
		}
	};*/


});