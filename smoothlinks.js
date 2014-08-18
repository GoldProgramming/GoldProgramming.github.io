$(document).ready(function(){
 $('a[href^="#"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash,
     $target = $(target);

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
     }, 2000, 'linear', function () {
         window.location.hash = target;
     });
 });
});

$(document).ready(function(){
 $('.close').on('click',function (e) {
     $(document.getElementById($(this).data("close"))).slideUp();
 });
});