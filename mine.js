$(document).ready(function(){

let aboutOffset=$("#about").offset().top;
 console.log(aboutOffset);  
$(window).scroll(function(){

    let wScroll=$(window).scrollTop();
   console.log(wScroll); 
   if(wScroll > aboutOffset )
   {
    
       $("nav").addClass("bg-nav");
       $(".slideup").fadeIn(500);
   }
   else
   {
    $("nav").removeClass("bg-nav");
    $(".slideup").fadeOut(500);
   }

})

$(".slideup").click(function(){

$("html,body").animate({scrollTop:"0px"},1000);

})
$("a").click(function(){
    let sectionOffset =($(this).attr("href"))
    
    $("html,body").animate({scrollTop:$(sectionOffset).offset().top-50},1000)
    
    })

$(".loading").fadeOut("2000",function(){
 $("body").css("overflow","auto")
    
})









































})