
$(document).ready(function() {

//----------------------- 클릭시, 최상단으로 이동_퀵바
$('.go_top').click(function(e){
	e.preventDefault();
	$('html,body').stop().animate({scrollTop:0});
});


//모바일디바이스높이체크
function appHeight() {
const doc = document.documentElement
doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}
window.addEventListener('resize', appHeight);
appHeight();

if($('.ani_box').length){contentAni();}
function contentAni(){
	
	var El = $('.ani_box');
		//Des = $('.description_box'),
		//Img = $('.img_box img');

	
	$(window).on('scroll.ani',function(){
		
		El.each(function(){
			var Top = $(this).offset().top,
				gap = 500;
			//console.log(Top);
			if($(window).scrollTop() >= Top - gap){

				$(this).addClass('ani_start');
				$(this).find('.ani_item').each(function(){
					var This=$(this),
						idx = $(this).index();
					if(This.hasClass('ani_top')){
						setTimeout(function(){This.css({opacity:1}).addClass('animate__animated animate__fadeInUp');},0+(idx*300));
					}
					if(This.hasClass('ani_down')){
						setTimeout(function(){This.css({opacity:1}).addClass('animate__animated animate__fadeInDown');},0+(idx*300));
					}
					if(This.hasClass('ani_left')){
						setTimeout(function(){This.css({opacity:1}).addClass('animate__animated animate__fadeInLeft');},0+(idx*300));
					}
						if(This.hasClass('ani_right')){
						setTimeout(function(){This.css({opacity:1}).addClass('animate__animated animate__fadeInRight');},0+(idx*300));
					}
				});
			}
		});
		
	});//scroll

	$(window).trigger('scroll.ani');

}

//---------------------------- 서브공통컨텐츠
if($('.sub_surgical_slider_con').length){subCommon1Slider();}

function subCommon1Slider(){
	let sliderWrap = $('.sub_surgical_slider_wrap'),
		sliderCon = $('.sub_surgical_slider_con'),
		sliderTab = $('.sub_surgical_slider_tab');

	sliderWrap.each(function(){
		let slider = $(this).find(sliderCon),
			tab = $(this).find(sliderTab);
			//tab = sliderTab;

		//console.log(slider,'dd');

		slider.slick({
			arrows:false,
			dots:true,
			autoplay:false,
			autoplayspeed:3000,
			speed:500,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendDots:tab,
			fade:true,
			//touchMove:false,
			//swipe:false
		});

		let item = slider.find('.item_box');
	
		dot = tab.find ('.slick-dots li');

		dot.each(function(idx){
			var txt = item.eq(idx).attr('data-dot-txt');
			//console.log(txt);
			$(this).html('<p>'+txt+'</p>');
		});

	});//sliderWrap

	

	
};//sub_common1_slider



});//end