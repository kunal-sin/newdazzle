$(document).ready(function()
    {
        $("#first").click(function(){
          $("#first").addClass('active');
          $("#second").removeClass('active');
          $("#third").removeClass('active');

          $("#slider1").removeClass('hide');
          $("#slider2").addClass('hide');
          $("#slider3").addClass('hide');

        });

        $("#second").click(function(){
          $("#first").removeClass('active');
          $("#second").addClass('active');
          $("#third").removeClass('active');


          $("#slider1").addClass('hide');
          $("#slider2").removeClass('hide');
          $("#slider3").addClass('hide');
        });

        $("#third").click(function(){
          $("#first").removeClass('active');
          $("#second").removeClass('active');
          $("#third").addClass('active');


          $("#slider1").addClass('hide');
          $("#slider2").addClass('hide');
          $("#slider3").removeClass('hide');
        });


        if($(window).width() < 800){
        	$("#slider1").removeClass('hide');
        	$("#slider2").removeClass('hide');
        	$("#slider3").removeClass('hide');
        }
        else
        {
        	$("#slider2").addClass('hide');
        	$("#slider3").addClass('hide');
        }

        $(window).resize(function(){

        	if($(window).width() < 800)
        	{
        		$("#slider1").removeClass('hide');
        		$("#slider2").removeClass('hide');
        		$("#slider3").removeClass('hide');
        	}
        	else
        	{
        		$("#slider2").addClass('hide');
        		$("#slider3").addClass('hide');
       	 	}

          if($(window).width()<767)
          {
              $("#myNavbar ul").removeClass('navbar-center');
          }
          else
          {
              $("#myNavbar ul:first-child").addClass('navbar-center');
          }

          if($(window).width()<768)
          {
              $(".triangle-left").addClass('triangle-up');
              $(".triangle-up").removeClass('triangle-left');
              $(".triangle-right").addClass('triangle-down');
              $(".triangle-down").removeClass('triangle-right');

          }
          else
          {
              $(".triangle-up").addClass('triangle-left');
              $(".triangle-left").removeClass('triangle-up');
              $(".triangle-down").addClass('triangle-right');
              $(".triangle-right").removeClass('triangle-down');
          }

          if($(window).width()<416)
          {
            $(".column").removeClass('col-xs-10');
            $(".column").addClass('col-xs-12');
            $(".column").removeClass('col-xs-offset-1');

            $(".column").removeClass('col-xs-10');
            $(".column").addClass('col-xs-12');
          }
          else
          {

            $(".column").removeClass('col-xs-12');
            $(".column").addClass('col-xs-10');
            $(".column").removeClass('col-xs-12');
            $(".column").addClass('col-xs-10');
            $(".column").addClass('col-xs-offset-1');
          }

          if($(window).width()>767)
          {
            $(".column").removeClass('col-xs-offset-1');
          }

        });

        $('.scroller').slick({
                infinite: false,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                // prevArrow:"<a href='#'><i class='fa fa-chevron-circle-left fa-4x' aria-hidden='true'></i></a>",
                // nextArrow:"<a href='#'><i class='fa fa-chevron-circle-right fa-4x' aria-hidden='true'></i></a>",
                responsive: [
                  {
                      breakpoint:1207,
                      settings:{
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 500,
                        infinite:false,
                        dots: false
                      }
                  },

                  {
                    breakpoint: 823,
                    settings: {
                      slidesToShow: 1,
                      autoplay: true,
                        speed: 500,
                      slidesToScroll: 1,
                      infinite: false,
                    }
                  }
                ]
          });



      }

);