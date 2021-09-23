$(document).ready(function(){
  
  // gnb>li:hover
  $(window).resize(function(){
    let winWid=$(this).width();

    if(winWid>768){
      $('.sub,.sub_bg').css('display','none')
      $('.gnb>li').mouseenter(function(){
        $('.sub_bg').stop().slideDown(200);
        $(this).find('.sub').stop().slideDown(300);
      }).mouseleave(function(){
        $('.sub_bg').stop().slideUp(300);
        $(this).find('.sub').stop().slideUp(200);
      });
    }else{
      $('.menuBtn').click(function(){
        $(this).find('span').toggleClass('active');
        $('.utile>div:nth-child(2)').toggle();
        $('.utile>div:nth-child(3)').toggle();
        $('.sub_bg').stop().slideToggle();
        $('.gnb').stop().slideToggle();
      });

    }

  }).resize();


  // 햄버거menu 
  // $('.menuBtn').click(function(){
  //   $(this).find('span').toggleClass('active');
  // });


  // main
  let num=0,
  slideleng=$('.slides a').length;
  setInterval(function(){
    if(num<slideleng-1){
      num++;
    }else{
      num=0;
    };

    $('.slides a').removeClass('active');
    $('.slides a').eq(num).addClass('active');
  },3500);


  // scroll event1
  $(window).scroll(function(){
    let scroll=$(this).scrollTop();

    if(scroll>150){
      $('#sec1').find('article').addClass('active');
    }else{
      $('#sec1').find('article').removeClass('active');
    };
  });


  // banner slick slider
    const $quick_banner=$('.quick_banner'),
    $bannerWrap=$quick_banner.find('.bannerWrap'),
    $banner=$bannerWrap.find('.banner'), 
    $arrowWrap=$quick_banner.find('.arrowWrap'),
    $prev=$arrowWrap.find('.prev'),
    $next=$arrowWrap.find('.next'),
    $indicator=$quick_banner.find('.indicator'),
    $indicatorA=$indicator.find('a');
  
    let sliderleng=$banner.length,
    currentIdx=0,
    indicatorHtml='',
    timer;
  
    $banner.each(function(i){
      let cont=$(this).find('img').attr('alt');
      indicatorHtml+="<a href='#none'></a>"
      $indicator.html(indicatorHtml)
    });
    $bannerWrap.css('width',(sliderleng*100)+'%')

    // 바로실행
    goToSlider(currentIdx);
    autoPlay();

    // 함수
    function goToSlider(idx){
      $banner.stop().animate({left:(-33.3333*idx)+'%'},1000);
      currentIdx=idx;
      arrowHid();
      $indicator.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
    }

    $indicator.find('a').click(function(){
      let $idx=$(this).index();
      goToSlider($idx);
      $(this).addClass('active').siblings().removeClass('active');
    });

    $arrowWrap.find('a').click(function(e){
      e.preventDefault();
      if($(this).hasClass('prev')){
        goToSlider(currentIdx-1);
      }else{
        goToSlider(currentIdx+1);
      };
      $indicator.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
    });

    function arrowHid(){
      // prev
      if(currentIdx===0){
        $prev.addClass('hid');
      }else{$prev.removeClass('hid');}
      // next
      if(currentIdx===sliderleng-1){
        $next.addClass('hid');
      }else{$next.removeClass('hid');}
    }

    function autoPlay(){
      timer=setInterval(function(){
        let nextIdx=(currentIdx+1)%sliderleng;
        goToSlider(nextIdx);
      },3500)
    }
    function stop(){
      clearInterval(timer);
    }
    $quick_banner.mouseenter(function(){
      stop();
    }).mouseleave(function(){
      autoPlay();
    })


  // tab
  $('.tab_link').click(function(){
    $('.tab_link').removeClass('on');
    $('.tab_conts').removeClass('on');
    $(this).addClass('on');
    $('#'+$(this).data('id')).addClass('on');
    // console.log($(this).data('id'));
  });

  
  // goTop
  $('.goTop').click(function(){
    $('html,body').animate({'scrollTop':0})
  });

  
});