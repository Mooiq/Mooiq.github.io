$(function(){
	$('.car_1').click(function(){
		
		$(this).css('background','url(img/gouwu_1.jpg) no-repeat');
		
		$('.car_2,.car_3,.car_4,.car_6').css('background','#000');
		$('.top1,.top2,.yz_none').css('display','none');
		return false;
	});
	
	
	$('.car_2').click(function(){
		if($('.top1').css('display')=='none'){
			$(this).css('background','#c40000');
			$('.top1').css('display','block');
		}else{
			$(this).css('background','#000');
			$('.top1').css('display','none');
		};
		
		
		$('.car_1,.car_3,.car_4,.car_6').css('background','#000');
		$('.top2,.yz_none').css('display','none');
		
		
		return false;
	});
	
	$('.car_3').click(function(){
		if($('.top2').css('display')=='none'){
			$(this).css('background','#c40000');
			$('.top2').css('display','block');
		}else{
			$(this).css('background','#000');
			$('.top2').css('display','none');
		};
		
		$('.car_1,.car_2,.car_4,.car_6').css('background','#000');
		$('.top1,.yz_none').css('display','none');
		
		
		return false;
	});
	
		$('.car_4').click(function(){
		
			$(this).css('background','#c40000');
			
			$('.car_2,.car_3,.car_6').css('background','#000');
			$('.top1,.top2,.yz_none').css('display','none');
			return false;
		});
		

	$('.car_5').click(function(){
		if($('.yz_none').css('display')=='none'){
			
			$('.yz_none').css('display','block');
		}else{
		
			$('.yz_none').css('display','none');
			
		};
		$('.car_2,.car_3,.car_4,.car_6').css('background','#000');
		$('.top1,.top2').css('display','none');
		
		return false;	
	});
	
	
		$('.car_6').click(function(){
		
		$('html,body').animate({'scrollTop':0},1200);
			
		$('.car_2,.car_3,.car_4').css('background','#000');
		$('.top1,.top2,.yz_none').css('display','none');
		return false;
	});
	
	
	$(document).click(function(){
		$('.yz_none').css('display','none');
		$('.top1,.top2').css({'display':'none'});
		$('.car_2,.car_1,.car_3,.car_4,.car_6').css('background','#000');
	});
	
	

//设置左侧导航功能样式和右侧返回顶部按钮	
	
	var now=0;var a=0;
	function int(){
		
		$('.zuoce_dao').find('a').eq(now).stop(true).animate({
			'opacity':'1'
		},400);
		$('.zuoce_dao').find('.hover_img').eq(now).stop(true).animate({
			'width':'-5'
		},400).css('opacity','0');
		
	};
	
	function likai(){
		
		$('.zuoce_dao').find('a').eq(now).stop(true).animate({
			'opacity':'0'
		},100);
		
		$('.zuoce_dao').find('.hover_img').eq(now).stop(true).animate({
			'width':'+10'
		},400).css('opacity','1');
	}
	
	
	
//根据top值高亮对应的tab
	function tab(){
		
	if($('.zuoce_dao').offset().top>1800&&$('.zuoce_dao').offset().top<2200)
	{
		now=0;
		
		int();
		
	
	}else if($('.zuoce_dao').offset().top>2250&&$('.zuoce_dao').offset().top<2700)
	{
		now=1;
		int();
	}else if($('.zuoce_dao').offset().top>2750&&$('.zuoce_dao').offset().top<3200)
	{
		now=2;
		int();
	}else if($('.zuoce_dao').offset().top>3250&&$('.zuoce_dao').offset().top<3700)
	{
		now=3;
		int();
	}
	}
	
	
	
	// 设置点击tab滚动到对应的高度

	$('.zuoce_dao').find('li').eq(0).click(function(){
		$('html,body').stop().animate({'scrollTop':1460},1200)
	})
	$('.zuoce_dao').find('li').eq(1).click(function(){
		$('html,body').stop().animate({'scrollTop':1900},1200)
	})

	$('.zuoce_dao').find('li').eq(2).click(function(){
		$('html,body').stop().animate({'scrollTop':2400},1200)
	})

	$('.zuoce_dao').find('li').eq(3).click(function(){
		$('html,body').stop().animate({'scrollTop':2900},1200)
	})
	

	// 监听scroll
	$(window).scroll(function(){
		

	if($('.zuoce_dao').offset().top>1400)
	
	{
		
		$('.zuoce_dao').fadeIn(500);
	}else{
		$('.zuoce_dao').fadeOut(500);
	}
	
	
		if($(this).scrollTop()>400)
		{
			
			$('.car_6').fadeIn(800);
		}else{
			$('.car_6').fadeOut(800);
		};
		
		$('.car_6').click(function(){
		$('html,body').stop().animate({'scrollTop':0},1200)
	});
	if($('.zuoce_dao').offset().top>1400)
	
	{
		$('.zuoce_dao').fadeIn(500);
	}else{
		$('.zuoce_dao').fadeOut(500);
	}


// 根据top切换tab对应标签和效果

	if($('.zuoce_dao').offset().top>1800&&$('.zuoce_dao').offset().top<2200)
	{
		now=0;
		
		int();
		
	
	}else{
		$('.zuoce_dao').find('a').eq(0).stop(true).animate({
			'opacity':'0'
		},100);
		
		$('.zuoce_dao').find('.hover_img').eq(0).css('opacity','1');
	}
	if($('.zuoce_dao').offset().top>2200)
	{	
		$('.zuoce_dao').find('a').eq(0).stop(true).animate({
			'opacity':'0'
		},100);
		
		$('.zuoce_dao').find('.hover_img').eq(0).css('opacity','1');
		
	}else{
		$('.zuoce_dao').find('a').eq(1).stop(true).animate({
			'opacity':'0'
		},100);
		
		$('.zuoce_dao').find('.hover_img').eq(1).css('opacity','1');
	}

	
	if($('.zuoce_dao').offset().top>2250&&$('.zuoce_dao').offset().top<2700)
	{
		
		now=1;
		int();
	}
	if($('.zuoce_dao').offset().top>2700)
	{
		$('.zuoce_dao').find('a').eq(1).stop(true).animate({
			'opacity':'0'
		},100);
		
		$('.zuoce_dao').find('.hover_img').eq(1).css('opacity','1');
	}else{
		$('.zuoce_dao').find('a').eq(2).stop(true).animate({
			'opacity':'0'
		},100);
		
		$('.zuoce_dao').find('.hover_img').eq(2).css('opacity','1');
	}
	
	if($('.zuoce_dao').offset().top>2750&&$('.zuoce_dao').offset().top<3200)
	{
		now=2;
		int();
	}
	
	if($('.zuoce_dao').offset().top>3200){
		$('.zuoce_dao').find('a').eq(2).stop(true).animate({
			'opacity':'0'
		},100);
		
		$('.zuoce_dao').find('.hover_img').eq(2).css('opacity','1');
	}else{
		
		$('.zuoce_dao').find('a').eq(3).stop(true).animate({
			'opacity':'0'
		},100);
		
		$('.zuoce_dao').find('.hover_img').eq(3).css('opacity','1');
	}
	
	if($('.zuoce_dao').offset().top>3250&&$('.zuoce_dao').offset().top<3700)
	{
		now=3;
		int();
	}

	
})
	
})
