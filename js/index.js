$(function(){
//标题响应
var flag=true
$(".cha").click(function(){
    if(flag){
        $(".cha1").css({
            "transform":"translate(0,3px) rotate(45deg)"
        })
        $(".cha2").css({
            "transform":"translate(0,-4px) rotate(-45deg)"
        })
        $(".hide").css({
            "height": 400,
        })
        $(".topnav .hide li").each(function(index,obj){
            $(obj).css({
                "opacity":1,
                "transition":"all 700ms ease "+index*0.1+"s"
            })
        })
        flag=false
    }else{
        $(".cha1").css({
            "transform":""
        })
        $(".cha2").css({
            "transform":""
        })
        $(".hide").css({
            "height": 0,
        })
        $(".topnav .hide li").each(function(index,obj){
            $(obj).css({
                "opacity":0,
                "transition":""
            })
        })
        flag=true
    }
})
//******************************************
//轮播
    var next=0;
    var now=0;
    function lun () {
        next++;
        if(next>$(".banner").length-1) {
            next=0
        }
        $(".banner").eq(now).stop().animate({left:"-100%"})
        $(".banner").eq(next).css("left","100%")
        $(".banner").eq(next).stop().animate({left:0})
        $(".yuan li").eq(now).attr("id","")
        $(".yuan li").eq(next).attr("id","hehe")
        now=next
    }
    var t=setInterval(lun,2000);
    $(".bannerbox").hover(function(){
        clearInterval(t)
        $(".btnz").css("opacity",1)
        $(".btny").css("opacity",1)
    },function(){
        t=setInterval(lun,2000)
        $(".btnz").css("opacity",0)
        $(".btny").css("opacity",0)
    })
    $(".btnz").click(function(){
        lun ()
    })
    $(".btny").click(function(){
        next--;
        if(next<0) {
            next=$(".banner").length-1
        }
        $(".banner").eq(now).stop().animate({left:"100%"})
        $(".banner").eq(next).css("left","-100%")
        $(".banner").eq(next).stop().animate({left:0})
        $(".yuan li").eq(now).attr("id","")
        $(".yuan li").eq(next).attr("id","hehe")
        now=next
    })
    $(".bannerbox .yuan li").click(function(){
        index=$(".bannerbox .yuan li").index(this)
        next=index
        $(".banner").eq(now).stop().animate({left:"100%"})
        $(".banner").eq(next).css("left","-100%")
        $(".banner").eq(next).stop().animate({left:0})
        $(".yuan li").eq(now).attr("id","")
        $(".yuan li").eq(next).attr("id","hehe")
        now=next
    })
//******************************************
//底部响应
//    $(".xyfoot-1").click(function(){
//        if(flag){
//            $(".xyul-1").css({
//                "height": 400,
//            })
//            $(".msd").css("transform","rotate(45deg)")
//            $(".msb").css({
//                "color":"#000",
//                "font-weight":"bold"
//            })
//            flag=false
//        }else{
//            $(".xyul-1").css({
//                "height": 0,
//            })
//            $(".msb").css({
//                "color":"#666",
//                "font-weight":"none"
//            })
//            $(".msd").css("transform","rotate(0deg)")
//            flag=true
//        }
//
//    })
//    //**************************
//    $(".xyfoot-2").click(function(){
//        if(flag){
//            $(".xyul-2").css({
//                "height": 400,
//            })
//            $(".msd2").css("transform","rotate(45deg)")
//            $(".msb2").css({
//                "color":"#000",
//                "font-weight":"bold"
//            })
//            flag=false
//        }else{
//            $(".xyul-2").css({
//                "height": 0,
//            })
//            $(".msb2").css({
//                "color":"#666",
//                "font-weight":"none"
//            })
//            $(".msd2").css("transform","rotate(0deg)")
//            flag=true
//        }
//
//    })
    $(".xyfoot-1").each(function(index,obj){
        $(obj).click(function(){
            if(flag){
                if(index==0){
                    $(".xyul-1").eq(index).css({
                        "height": 240,
                    })
                }
                if(index==1){
                    $(".xyul-1").eq(index).css({
                        "height": 300,
                    })
                }
                if(index==2 || index==3){
                    $(".xyul-1").eq(index).css({
                        "height": 60,
                    })
                }
                if(index==4){
                    $(".xyul-1").eq(index).css({
                        "height": 90,
                    })
                }
                if(index==5){
                    $(".xyul-1").eq(index).css({
                        "height": 120,
                    })
                }
                if(index==6){
                    $(".xyul-1").eq(index).css({
                        "height": 150,
                    })
                }
            $(".msd").eq(index).css("transform","rotate(45deg)")
            $(".msb").eq(index).css({
                "color":"#000",
                "font-weight":"bold"
            })
            flag=false
        }else{
            $(".xyul-1").eq(index).css({
                "height": 0,
            })
            $(".msb").eq(index).css({
                "color":"#666",
                "font-weight":"none"
            })
            $(".msd").eq(index).css("transform","rotate(0deg)")
            flag=true
        }
        })
    })
    //***********************
})