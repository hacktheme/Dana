$(document).ready(function(){
  'use strict';


  $(document).ready(function() {
    $('.one-page-scrol a, .one-page-nav a').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
  });

  $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();

      // Show/hide menu on scroll
      //if (scrollDistance >= 850) {
      //    $('nav').fadeIn("fast");
      //} else {
      //    $('nav').fadeOut("fast");
      //}
    
      // Assign active class to nav links while scolling
      $('.pg-scn,.pg-scn2').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.one-page-scrol a.active, .one-page-nav li.active').removeClass('active');
              $('.one-page-scrol a, .one-page-nav li').eq(i).addClass('active');
          }
      });
  }).scroll();

  //===== Dropdown Anmiation =====// 
  var drop = $('.social-btns2 > a');
  $('.social-btns2').each(function(){
    var delay = 0;
    $(this).find(drop).each(function(){
      $(this).css({transitionDelay: delay+'ms'});
      delay += 120;
    });
  }); 

  //===== Wow Animation Setting =====//
  var wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }); 

  wow.init();

  //===== Search Script =====//
  $('.srch-btn').on('click',function(){
    $('.hdr-srch-bx').addClass('active');
    return false;
  });

  $('.srch-cls-btn').on('click',function(){
    $('.hdr-srch-bx').removeClass('active');
    return false;
  });

  //===== Menu Script =====//
  $('.mnu-opn-btn').on('click',function(){
    $('.menu-box').addClass('active');
    return false;
  });

  $('.mnu-cls-btn').on('click',function(){
    $('.menu-box').removeClass('active');
    return false;
  });

  //===== Categories Toggle =====//
  $('div.tgl-lst li.tgl-has-chld > a').on('click', function () {
    $(this).parent().siblings().children('ul').slideUp();
    $(this).parent().siblings().removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== One Page Scroll Script =====//
  $('.one-page-nav > a').on('click',function(){
    $('.one-page-nav > a').removeClass('active');
    $(this).addClass('active');
  });

  $(function() {
    $('.one-page-nav > a').on('click',function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
      return false;
    });
  });


  $('.popup-close').on('click',function(){
    $('html').removeClass('popuo-active');
    return false;
  });

  //===== Count Down =====//
  if ($.isFunction($.fn.downCount)) {
      $('.cntdn-lst').downCount({
          date: '12/3/2019 12:00:00',
          offset: +5
      });
  }

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== Responsive Header =====//
  $('.rspn-mnu-btn').on('click', function () {
    $('.rsnp-mnu').addClass('slidein');
    return false;
  });
  $('.rspn-mnu-cls').on('click', function () {
    $('.rsnp-mnu').removeClass('slidein');
    return false;
  });
  $('.rsnp-mnu li.menu-item-has-children > a, header.style6 li.menu-item-has-children > a, header.style5 li.menu-item-has-children > a').on('click', function () {
    $(this).parent().siblings().children('ul').slideUp();
    $(this).parent().siblings().removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== Range Slider =====//
  if ($('#prc-rng').length > 0) {
    var slider = document.getElementById('prc-rng');
    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
    });  
  }


  //===== Scrollbar =====//
  if ($('.rsnp-mnu, header.style5').length > 0) {
    var ps = new PerfectScrollbar('.rsnp-mnu, header.style5');
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.fancybox)) {
    $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
  }

  //===== Select =====//
  if ($('select').length > 0) {
    $('select').selectpicker();
  }

  //===== ToolTip =====//
  if ($.isFunction($.fn.tooltip)) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  //===== TouchSpin =====//
  if ($.isFunction($.fn.TouchSpin)) {
    $('.prd-qty > input').TouchSpin();
  }

  //===== Count Down =====//
  if ($.isFunction($.fn.downCount)) {
    $('.countdown').downCount({
      date: '12/12/2018 12:00:00',
      offset: +5
    });
  }

  //===== Owl Carousel =====//
  if ($.isFunction($.fn.owlCarousel)) {

    //=== Service Carousel ===//
    $('.srv-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 2,
      dots: true,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
        0:{items: 1},
        480:{items: 1,margin: 30},
        768:{items: 2,margin: 30},
        980:{items: 2, margin: 30},
        1024:{items: 2,margin: 30},
        1200:{items: 2}
      }
    });

    //=== Choose Plan Carousel ===//
    $('.choose-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 2,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: true,
      margin: 30,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
        0:{items: 1},
        480:{items: 1,margin: 30},
        768:{items: 2,margin: 30},
        980:{items: 2, margin: 30},
        1024:{items: 2,margin: 30},
        1200:{items: 2}
      }
    });

    //=== Sponsors Carousel ===//
    $('.spnsr-car').owlCarousel({
      autoplay: true,
      smartSpeed: 3000,
      loop: true,
      items: 3,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 20,
      responsive:{
        0:{items: 2},
        480:{items: 2,margin: 30},
        768:{items: 3,margin: 30},
        980:{items: 3, margin: 30},
        1024:{items: 3,margin: 30},
        1200:{items: 3}
      }
    });

    //=== Sponsors Carousel ===//
    $('.spnsr-car2').owlCarousel({
      autoplay: true,
      smartSpeed: 3000,
      loop: true,
      items: 4,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      responsive:{
        0:{items: 2},
        480:{items: 2,margin: 30},
        768:{items: 3,margin: 30},
        980:{items: 3, margin: 30},
        1024:{items: 4,margin: 30},
        1200:{items: 4}
      }
    });

    //=== Testimonials Carousel ===//
    $('.testi-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30
    });

    //=== Contact Info Carousel ===//
    $('.cnt-inf-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      animateIn: 'slideInDown',
      animateOut: 'slideOutDown'
    });

    //=== Contact Info Carousel ===//
    $('.cnt-inf-car2').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      animateIn: 'slideInDown',
      animateOut: 'slideOutDown'
    });

    //=== Tweets Carousel ===//
    $('.twtr-feed-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    });

    //=== Journey Desc Carousel ===//
    $('.jrny-desc-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      animateOut: 'fadeOutDown',
      animateIn: 'fadeInDown',
    });

    //=== Service Carousel ===//
    $('.srv-bx4-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 3,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: true,
      margin: 30,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
        0:{items: 1,nav: false},
        480:{items: 1,nav: false},
        768:{items: 2},
        980:{items: 2},
        1024:{items: 3},
        1200:{items: 3}
      }
    });

    //=== Post Thumb Carousel ===//
    $('.post-thmb-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 0,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    });

    //=== Post Thumb Carousel ===//
    $('.post-thmb-car2').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    });

    //=== Portfolio Thumb Carousel ===//
    $('.prtfl-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    });

    //=== Price Plan Carousel ===//
    $('.prc-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      animateOut: 'fadeOutDown',
      animateIn: 'fadeInDown',
    });

    //=== Service Carousel ===//
    $('.testi-car3').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: true,
      margin: 30,
      navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>"
      ]
    });

    //=== Web Development Carousel ===//
    $('.wb-dvplmnt-car').owlCarousel({
      autoplay: true,
      smartSpeed: 600,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      animateIn: 'slideInDown',
      animateOut: 'slideOutDown'
    });

    //=== Product Carousel ===//
    $('.prd-car').owlCarousel({
      autoplay: true,
      smartSpeed: 3000,
      loop: true,
      items: 4,
      dots: false,
      slideSpeed: 2000,
      autoplayHoverPause: true,
      nav: true,
      margin: 25,
      navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>"
      ],
      responsive:{
        0:{items: 1},
        480:{items: 1,margin: 25},
        768:{items: 2,margin: 25},
        980:{items: 3, margin: 25},
        1024:{items: 4,margin: 25},
        1200:{items: 4}
      }
    });

  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {
    $('.testi-msg-lst').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      slide: 'li',
      fade: false
    });

    $('.prd-dtl-img-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      slide: 'li',
      fade: false,
      asNavFor: '.prd-dtl-img-nv'
    });
    
    $('.prd-dtl-img-nv').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.prd-dtl-img-big',
      dots: false,
      arrows: false,
      slide: 'li',
      vertical: true,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          vertical: true,
          centerMode: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          vertical: true,
          centerMode: true,
          dots: false,
          arrows: false
        }
      }
      ]
    });
  }

});//===== Document Ready Ends =====//


$(window).on('load',function(){
  'use strict';

  var menu_height = $('header').innerHeight();
  if ($('header').hasClass('stick')) {
    $('main').css({'padding-top': menu_height});
  }

  //===== Isotope =====//
  if (jQuery('.fltr-itm').length > 0) {
    if (jQuery().isotope) {
      var jQuerycontainer = jQuery('.masonry, .msonry'); // cache container
      var jQuerycontainer2 = jQuery('.msonry2'); // cache container
      jQuerycontainer.isotope({
        itemSelector: '.fltr-itm',
        columnWidth:1,
        layoutMode: 'fitRows',
      });
      jQuerycontainer2.isotope({
        itemSelector: '.fltr-itm',
        columnWidth:1
      });
      jQuery('.fltr-btns a, .fltr-lnks a').click(function () {
        var selector = jQuery(this).attr('data-filter');
        jQuery('.fltr-btns li, .fltr-lnks li').removeClass('active');
        jQuery(this).parent().addClass('active');
        jQuerycontainer.isotope({filter: selector});
        jQuerycontainer2.isotope({filter: selector});
        return false;
      });
      jQuerycontainer.isotope('layout'); // layout/layout
      jQuerycontainer2.isotope('layout'); // layout/layout
    }

    jQuery(window).resize(function () {
      if (jQuery().isotope) {
        jQuery('.masonry, .msonry, .msonry2').isotope('layout'); // layout/relayout on window resize
      }
    });
  }
});//===== Window onLoad Ends =====//

//===== Sticky Header =====//
$(window).on('scroll',function () {
  'use strict';

  var menu_height = $('header').innerHeight();
  var scroll = $(window).scrollTop();
  if (scroll >= menu_height) {
    $('.stick').addClass('sticky');
  } else {
    $('.stick').removeClass('sticky');
  }
});//===== Window onScroll Ends =====//
