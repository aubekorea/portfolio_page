// MAIN_VISUAL_SLIDER
    var menu = [];
	var mainSwiper = $('.main_visual_slider');
	var mainSwiperNum = $('.main_visual_slider .swiper-slide').length;
	var running = 0;

    jQuery('.swiper-slide').each( function(index){
        menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
			},
        },

       /* navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },*/

		navigation:false,

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }      
            },

            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },

            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            },
			
			//220425추가
			init:function(){
				mainSliderChange();
				$('.main_visual_slider .space-swiper-pn-num').html('<div class="only-tab-mo"><b class="text-primary">1</b> / '+mainSwiperNum+'</div>');
			},
			slideChangeTransitionStart: function(){
				$('.main_visual_slider .space-swiper-pn>i').removeClass('progressing');
				$('.link-desc a>*').fadeOut(200);

				$('.swiper-slide .slide-txt .ani_txt').css({opacity:0}).removeClass('animate__animated animate__fadeInUp');

				/*$('.swiper-slide-active').find('.ani_txt').each(function(idx){
					var This=$(this);
					setTimeout(function(){This.css({opacity:1}).addClass('animate__animated animate__fadeInUp');},500+(idx*400));
				});*/
				//alert('change');
			},
			slideChangeTransitionEnd: function(){
				mainSliderChange();
			},
			slideChange: function(){

				$('.main_visual_slider .space-swiper-pn-num b').html(this.realIndex+1);
				//alert('change');
			},
			sliderFirstMove: function(){
				$('.main_visual_slider .space-swiper-pn>i').removeClass('progressing');
				$('.swiper-slide .slide-txt .ani_txt').css({opacity:0}).removeClass('animate__animated animate__fadeInUp');
			},
			touchEnd: function(){
				$('.main_visual_slider .space-swiper-pn>i').addClass('progressing');
				$('.swiper-slide-active').find('.ani_txt').each(function(idx){
					var This=$(this);
					setTimeout(function(){This.css({opacity:1}).addClass('animate__animated animate__fadeInUp');},300+(idx*400));
				});
				$('#autoplay').addClass('active');
				swiper.autoplay.start();
			},
        }
    };

    var swiper = new Swiper(".main_visual_slider .swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    /*var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });*/

	function mainSliderChange(){
		$('.main_visual_slider .space-swiper-pn>i').addClass('progressing');
		var activeSlide =  $('.main_visual_slider .swiper-slide.swiper-slide-active');
		
		$('.swiper-slide-active').find('.ani_txt').each(function(idx){
			var This=$(this);
			setTimeout(function(){This.css({opacity:1}).addClass('animate__animated animate__fadeInUp');},300+(idx*400));
		});
		/*var linkCont = activeSlide.find('h4') ,
			linkText = linkCont.text(),
			linkHref = linkCont.data('link');

		$('.link-desc a').find('h4').text(linkText);
		$('.link-desc a').attr('href' ,linkHref );

		$('.link-desc a>*').fadeIn(500);*/
	}

	$('#autoplay').click(function(){
		var t = $(this);
		if(swiper.autoplay.running){
			t.removeClass('active');
			$('.main_visual_slider .space-swiper-pn>i').removeClass('progressing');
			swiper.autoplay.stop();
		} else {
			t.addClass('active');
			$('.main_visual_slider .space-swiper-pn>i').addClass('progressing');
			swiper.autoplay.start();
		}
		//console.log('auto');
	});
	// --- 0812 수정
