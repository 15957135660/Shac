var header={
    head:$("#header"),
    lisNode:$("#header ul").children('li'),
    ddNode:$("#header ul").children('li').children('dl').children('dd')
}
header.lisNode.mouseenter(function(){
    if($(header.lisNode).children().is('dl'))
        $(this).children('dl').stop().show();
})
header.lisNode.mouseleave(function(){
    if($(header.lisNode).children().is('dl'))
        $(this).children('dl').stop().hide();
})
header.ddNode.mouseenter(function(){
    if($(header.ddNode).children().is('dl')){
        $(this).children('dl').stop().show();
        $(this).addClass('checked');
    }
})
header.ddNode.mouseleave(function(){
    if($(header.ddNode).children().is('dl')){
        $(this).children('dl').stop().hide();
        $(this).removeClass();
    }
})
var flash={
    flashNode:$('#flash'),
    leftNode:$('#flash').children('.flash_left'),
    rightNode:$('#flash').children('.flash_right'),
    ulNode:$('#flash').children('ul'),
    lisNode:$('#flash').children('ul').children('li'),
    spanNode:$("#flash").children('.flash_btn').children('span'),
    lastNode:$("#flash").children('.flash_btn').children('span').length-1
}
function move(curPos,oldPos){
    flash.spanNode.eq(oldPos).removeClass();
    flash.spanNode.eq(curPos).addClass('current');
    flash.lisNode.eq(oldPos).stop().fadeOut();
    flash.lisNode.eq(curPos).stop().fadeIn();
}
flash.spanNode.mouseenter(function(){
    var oldPos,curPos;
    oldPos=$("#flash .flash_btn .current").index();
    curPos=$(this).index();
    move(curPos,oldPos);
})
flash .flashNode.hover(
    function() {
        flash.leftNode.show();
        flash.rightNode.show();
        clearInterval(timer);
    },
    function(){
        flash.leftNode.hide();
        flash.rightNode.hide();
        timer=setInterval(function(){
            flash.leftNode.click();
        },3000)
})
flash.leftNode.click(function(){
    var oldPos,curPos;
    oldPos=$("#flash .flash_btn .current").index();
    curPos=oldPos>0?oldPos-1:flash.lastNode;
    move(curPos,oldPos);
})
flash.rightNode.click(function(){
    var oldPos,curPos;
    oldPos=$("#flash .flash_btn .current").index();
    curPos=oldPos<2?oldPos+1:0;
    move(curPos,oldPos);
})
var timer=setInterval(function(){
    flash.leftNode.click();
},3000)
var business={
    businessNode:$('#business'),
    ulNode:$('#business ul'),
    lisNode:$('#business ul').children('li')
}
business.lisNode.mouseenter(function(){
    var oldPos,curPos;
    oldPos=$("#business ul .current").index();
    curPos=$(this).index();
    business.lisNode.eq(oldPos).stop().animate({width:162+'px'},1000);
    business.lisNode.eq(oldPos).removeClass('current');
    var posX1=parseFloat(business.lisNode.eq(oldPos).children("div").css('background-position'));
    var posX2=parseFloat(business.lisNode.eq(curPos).children("div").css('background-position'));
    business.lisNode.eq(oldPos).children("div").css({'background-position':posX1+'px '+0});
    business.lisNode.eq(curPos).stop().animate({width:500+'px'},1000);
    business.lisNode.eq(curPos).addClass('current');
    business.lisNode.eq(curPos).children("div").css({'background-position':posX1+'px -179px'});
})

var about={
    mainLeft:$('#about .m-left'),
    mainRight:$('#about .m-right'),
    mRDiv:$('#about .m-left').children('div'),
    height:$('#about .m-left').height(),
    ulNode:$('#about .m-right ul'),
    lisNode:$('#about .m-right li'),
    aNode:$('#about .footer a'),
    liWidth:parseFloat($('#about .m-right li').outerWidth()),
    length:$('#about .m-right li').length
}
about.mainLeft.mouseenter(function(){
    about.mRDiv.animate({top:0},1000)
})
about.mainLeft.mouseleave(function(){
    about.mRDiv.animate({top:about.height},1000)
})
about.aNode.click(function(){
    var oldPos,newPos;
    oldPos=Math.abs(parseFloat(about.ulNode.css('margin-left')))/about.liWidth;
    if($(this).hasClass('left')){
        newPos=oldPos>0?oldPos-1:about.length-1;
        about.ulNode.stop().animate({marginLeft:'-'+newPos*(about.liWidth)+'px'},1000)
    }
    else{
        newPos=oldPos<2?oldPos+1:0;
        about.ulNode.stop().animate({marginLeft:'-'+newPos*(about.liWidth)+'px'},1000)
    }
})
var ourFriend={
    aNode:$('#ourFriend .conversion a'),
    liWidth:$('#ourFriend ul').children('li').outerWidth(true),
    liLength:$('#ourFriend ul').children('li').length
}
ourFriend.aNode.click(function(){
    if($(this).hasClass('left')){
        $('#ourFriend li:eq(0)').animate({marginLeft:-ourFriend.liWidth+'px'},500,function(){
            $('#ourFriend ul').append($('#ourFriend li:eq(0)'));
            $('#ourFriend li:last').css({"marginLeft":"0px"})
        })
    }
    else{
        $('#ourFriend li:last').css({"marginLeft":"-210px"});
        $('#ourFriend ul').prepend($('#ourFriend li:last'));
        $('#ourFriend li:eq(0)').animate({marginLeft:'0px'},500)
    }
})
var timer2=setInterval(function(){
    $('#ourFriend li:eq(0)').animate({marginLeft:-ourFriend.liWidth+'px'},500,function(){
        $('#ourFriend ul').append($('#ourFriend li:eq(0)'));
        $('#ourFriend li:last').css({"marginLeft":"0px"})
    })
},2000)
$("#ourFriend").mouseenter(function(){
    clearInterval(timer2);
})
$("#ourFriend").mouseleave(function(){
    $('#ourFriend li:eq(0)').animate({marginLeft:-ourFriend.liWidth+'px'},500,function(){
        $('#ourFriend ul').append($('#ourFriend li:eq(0)'));
        $('#ourFriend li:last').css({"marginLeft":"0px"})
    })
})

$('#footer .up').click(function(){
    $('body,html').animate({scrollTop:0},1000);
})
$('#online .a4').click(function(){
    $('body,html').animate({scrollTop:0},1000);
})

$('.c-main').isotope({
    itemSelector: '.c-main li'
});

$('.c-nav li').click(function(){
    $(this).addClass('current').siblings('li').removeClass('current');
    var dataValue=$(this).attr('data');
    $('.c-main').isotope({
        itemSelector: '.c-main li',
        filter:dataValue
    });
});

