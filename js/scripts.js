var $main_slider = $('#main_slider');
var $main_header = $('#main_header');
var $main_logo = $('#main_logo');
var $inversed_logo = $('#inversed_logo');

var admin_toolbar_height = parseInt($('html').css('marginTop'), 10);

    function header_switch(){
            if($(document).scrollTop() < $main_slider.height()-80 && $(window).width()>320){
                if($(document).scrollTop() < $main_header.height()){
                    $main_header.addClass('menu_over_slider').fadeIn();
                    $main_logo.hide();
                    $inversed_logo.show();
                }
                else{
                    $main_header.fadeOut();
                }
            }
            else{
                $main_header.removeClass('menu_over_slider').slideDown();
                $main_logo.show();
                $inversed_logo.hide();
            }
    }

    function sticky_header(){
        if($(window).width()>320){
            $main_header.css({
                'z-index' : '1999',
                'visibility' : 'visible',
                'position' : 'fixed',
                'top': 0+admin_toolbar_height
            });

            if($main_slider.length>0){
                $main_header.addClass('menu_over_slider');
                $(document).scroll(function(){
                    header_switch();
                });
            }
            else{
                $main_header.css('top', 0+admin_toolbar_height);
            }
        }
        else{
            $main_header.removeClass('menu_over_slider').css({
                'visibility' : 'visible',
                'position':'static',
                'top': 0
            });
        }
    }

    sticky_header();
    header_switch();

 

 $(document).ready(function() {

  $(".drop").click(function(){
    // console.log('in here');
     $('.submenu').removeClass("show");
     $(this).find('.submenu').addClass("show");
   });
   
  $('.resorts').owlCarousel({
    loop: true,
    merge:true,
    nav:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    dots:false,
    margin:10,
    responsive: {
      300: {
        items: 1,
        nav:true,
        autoplay:true
      },
      640: {
        items: 2,
        margin:40,
        autoplay:true,
        nav:true
      },
      768: {
        items: 3,
        margin:80
      }
    }
  })


  $('.insta-scroll').owlCarousel({
    loop: true,
    dots:false,
    autoplay:true,
    merge:true,
    responsiveClass: true,
    margin:4,
    responsive: {

      320: {
        items: 4,
        nav: false,
        margin:10
      },
      480: {
        items: 9,
        nav: false,                 
        margin:8
      }
    }
  })

  $('.opinions').owlCarousel({
    loop: true,
    merge:true,
    nav:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    dots:false,
    margin:10,
    responsive: {
      300: {
        items: 1,
        nav:true,
        autoplay:true,
        margin:30
      },
      640: {
        items: 2,
        margin:20,
        autoplay:true,
        nav:true
      },
      768: {
        items: 3,
        margin:50
      }
    }
  })
  
  })

  AOS.init();

  $(document).ready(function(){
    $(".collapse.show").each(function(){
      $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    $(".collapse").on('show.bs.collapse', function(){
      $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
      $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});

filterSelection("all")
function filterSelection(c) {
  var fil, i;
  fil = document.getElementsByClassName("galleries");
  if (c == "all") c = "";
  for (i = 0; i < fil.length; i++) {
    rainRemoveClass(fil[i], "show");
    if (fil[i].className.indexOf(c) > -1) rainAddClass(fil[i], "show");
  }
}

function rainAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function rainRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("filters");
var btns = btnContainer.getElementsByClassName('btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace("active","");
    this.className += " active";
  });
}


