// var e1 = $("h2")[0];
// console.log(e1);
//& selectors
// $("h2").css({"border-bottom":"2px solid red"});
// $("header nav li:odd").css({borderBottom:"2px solid red"});
// $("img[alt='map']").css({border:"3px solid blue"});
// $("#social-nav li").css({opacity:"0.4"}).css({border:"3px solid red"})
// $("#social-nav li").css({opacity:"0.4",border:"3px solid red"})
//& chaining
// $("#contact-methods").next().css({border:"3px solid red"})
// $("#social-nav").prev().css({border:"3px solid blue"});
// $(".banner-title").parent().css({border:"3px solid yellow"});
// $("#social-nav").children().css({border:"3px solid green"});
// $("#contact").find(".facebook").css({border:"3px solid red"})
// $("#social-nav").closest(".wrapper").css({border:"3px solid"})

// $("#contact-methods").css({border:"3px solid red"})
// .next().css({border:"3px solid green"})
// .closest("section").css({border:"4px solid"})

//& adding contents
//? append / prepend  / after / before
// var tweet = "<div>this is new tweet </div>";
// $("#tweet").after(tweet);

//& removing element 
// $("h2").empty()
// $("h2").remove()

//& change attribute
// $("#contact img").removeAttr("alt")
// $("#contact img").attr("alt","location")

// & events
// $(document).ready(

// )

$(function(){
   $("*").on("click",function(e){
    console.log(e)
    console.log(e.target)
    e.stopPropagation()
   }) 
})

//& wrap and unwrap
// $("section").unwrap("<div>")

var wrap = true;
var wrapper = "<div class='wrapper'>" ; 
$(".button").on('click',function(){
    if(wrap){
        $("section").unwrap();
        wrap = false;
        $(".button").text("wrap")
    }else{
        $("section").wrapAll(wrapper);
        wrap = true;
        $(".button").text("unwrap")
    }
})

//& working with classes
//? removeClass / addClass / toggleClass 
// $("header .wrapper").removeClass("wrapper")
// $("header > div").addClass("wrapper")

//& animation 
// $("section > h2").on('click',function(){
//     $(this).animate({width:"500px",height:"500px"},1000,"linear",function(){
//         alert("animation done")
//     })
// })

// & fadeIn / fadeOut / fadeTo
// $(function(){
$("h2").on("click",function(){
    // $(this).fadeOut(2000).fadeIn(2000)
    // $(this).fadeTo(2000,0.2).fadeTo(1000,0.8)
    //& show / hide / toggle
    $(this).hide(2000).show(2000)
})
// })

//& sliding elements 
$(".slide-up").one('click',function(){
    $("#lead-banner").slideUp(2000)
})
// $(".slide-up").off('click')

$(".slide-down").on('click',function(){
    $("#lead-banner").slideDown(2000)
})

//^ one --> event will fire for just one time 
     //? on + off





