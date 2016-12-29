/*
|__@Author: Nguyen Trung Nam
|__@Date: 08/2016
|_________________________________*/
$( document ).ready( function(){
    //toggle mobile navigation
      $( '#nav_mobile' ).on( 'click', function(){
          $( this ).toggleClass( 'active' );
          $( '.nav' ).toggleClass( 'active' );
          $( document ).on( 'click', function(e){
            if( e.clientX > 280 || e.pageX >= 280)
              $( '#nav_mobile, .nav' ).removeClass( 'active' );
          })
      })
    // set fixed nav when scroll
      $(window).on( 'scroll', function(){
        var _top = $(this).scrollTop();
        if( _top > ( $('.nav').height() + $('.hea').height() ) && $(this).width() >= 768 ){
          $( '.nav' ).addClass( 'is-fixed' );
        }
        else{
          $( '.nav' ).removeClass( 'is-fixed' );
        }
      })
    //home slider
      $("#home_slider").flexisel({
        visibleItems: 1,
        itemsToScroll: 1,
        animationSpeed: 500,
        infinite: true,
        navigationTargetSelector: null,
        autoPlay: {
          enable: false,
          interval: 5000,
          pauseOnHover: true
        },
        responsiveBreakpoints: {
          portrait: {
            changePoint:480,
            visibleItems: 1,
            itemsToScroll: 1
          },
            landscape: {
            changePoint:640,
            visibleItems: 1,
            itemsToScroll: 1
          },
            tablet: {
            changePoint:768,
            visibleItems: 1,
            itemsToScroll: 1
          }
        }
      });

    // responsive img
      var _img = $( '.items_img');
      function getScrollbarWidth() {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
      }
      function imgHeight(body_size){
        if (body_size === undefined) {
          body_size = $('html').width();
        }

        if(body_size <= 900){
          div_int = 4.7;
        } else if(body_size <= 950){
          div_int = 4.3;
        } else if(body_size <= 1230){
          div_int = 5.5;
        } else if(body_size <= 1440){
          div_int = 5.7;
        } else {
          div_int = 5.5;
        }

        return (body_size / div_int);
      }
      var body_size = $('html').width() - getScrollbarWidth();
      var img_height = imgHeight(body_size);
      if(body_size <= 767){
        _img.css('height', 'auto');
      } else {
        _img.css('height', img_height);
      }
      $(window).resize(function() {
        var body_size = $('html').width();
        var img_height = imgHeight();

        if(body_size <= 800){
          _img.css('height', 'auto');
        } else {
          _img.css('height', img_height);
        }
      });

      // change tab at sidebar
        $( '.tab_button' ).on( 'click', function(){
          var _id = $( this ).data('tab');
          var _tab = '#tab-' + _id;
          $( '.tab_button' ).removeClass( 'active' );
          $( this ).addClass( 'active' );
          $( '.tab-content' ).hide();
          $( _tab ).show();
        })
})
