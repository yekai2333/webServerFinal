$(document).ready(function () {
    var flag=0;
    $("#denglu").click(function () {
        if($("#zhangHao").val()!=""&&$("#miMa").val()!=""){
            flag=1;
            $("#zhangHao").val("");
            $("#miMa").val("");

            alert("登录成功");
        }
        $("#dropMenu0").css("display","none");
    })

    $(".testButton").click(function () {
        var panelSpace=$(window).height();
        if($(this).attr('id')=="test2Button"){
            panelSpace=panelSpace*2;
        }
        else if($(this).attr('id')=="test3Button"){
            panelSpace=panelSpace*3;
        }
        else if($(this).attr('id')=="test4Button"){
            panelSpace=panelSpace*4;
        }
        var scrollHeight=$(window).scrollTop();

        $("html,body").animate({
            scrollTop:scrollHeight+panelSpace
        },800)
    })
    $("#toTop").click(function () {
        $("html,body").animate({
            scrollTop:0
        },800)
    })
    $("#toTop2").click(function () {
        $("html,body").animate({
            scrollTop:0
        },800)
    })
    $("#toTop3").click(function () {
        $("html,body").animate({
            scrollTop:0
        },800)
    })
    $("#homeNav li").click(function () {
        $(this).find(".dropMenu").each(function () {
            if(flag==1) {
                    if ($(this).css("display") == "none") {
                        $(this).css("display", "block");
                        $(this).parent().siblings().find(".dropMenu").each(function () {
                            $(this).css("display", "none");
                        })
                    } else {
                        $(this).css("display", "none");
                    }
            }
            else{
                if($(this).attr("id")=="dropMenu0"){
                    if($("#dropMenu0").css("display")=="none"){
                        $("#dropMenu0").css("display","block");
                    }
                }
                else{
                    if ($(this).css("display") == "none") {
                        $(this).css("display", "block");
                        $(this).parent().siblings().find(".dropMenu").each(function () {
                            $(this).css("display", "none");
                        })
                    } else {
                        $(this).css("display", "none");
                    }
                }
            }
        });
    })

    $("#page1links>div").click(function () {
        if( $(this).attr("flag")==0) {
            $(this).attr("flag","1");
            $(this).css("background-color", "#3B6978");
            $(this).find("p").each(function () {
                $(this).css("color", "#fff");
            })
            $(this).find(".layui-icon").each(function () {
                $(this).css("color", "#fff");
            })

            $(this).siblings().attr("flag","0");
            $(this).siblings().css("background-color", "#fff");
            $(this).siblings().find("p").each(function () {
                $(this).css("color", "#3B6978");
            })
            $(this).siblings().find(".layui-icon").each(function () {
                $(this).css("color", "#3B6978");
            })
        }
        else{
            $(this).attr("flag","0");
            $(this).css("background-color", "#fff");
            $(this).find("p").each(function () {
                $(this).css("color", "#3B6978");
            })
            $(this).find(".layui-icon").each(function () {
                $(this).css("color", "#3B6978");
            })
        }
    })
    $(".picFrame:nth-child(1) .pic").click(function () {
        window.location.href="https://apollo.auto/platform/dueros_cn.html";
    })
    $(".picFrame:nth-child(2) .pic").click(function () {
        window.location.href="http://www.cpsdna.com/cxtx.html";
    })
    $(".page1Link:eq(0)").click(function () {
        window.location.href="http://www.cpsdna.com/cxz.html";
    })
    $(".page1Link:eq(1)").click(function () {
        window.location.href="http://www.cpsdna.com/czg.html";
    })
    $(".page1Link:eq(2)").click(function () {
        window.location.href="http://www.cpsdna.com/vmaster.html";
    })
    $(".page1Link:eq(3)").click(function () {
        window.location.href="http://www.cpsdna.com/vfleet.html";
    })

    $("#vehiclePlatform").click(function () {

            window.location.href="../templates/index1.html";


    })
    $("#projectIntroduce").click(function () {
            window.location.href="../templates/projectDoc.html";
    })

    $("#dropMenu1 div:eq(0)").click(function () {
        window.location.href="../templates/cloud.html";
    })
    $("#dropMenu1 div:eq(1)").click(function () {
        window.location.href="../templates/rsu.html";
    })
    $("#dropMenu1 div:eq(2)").click(function () {
        window.location.href="../templates/attr.html";
    })
    $("#dropMenu2 div:eq(0)").click(function () {
        window.location.href="../templates/feedBack.html";
    })
    $("#dropMenu2 div:eq(1)").click(function () {
        window.location.href="../templates/aboutUs.html";
    })


    //layui-js

    //轮播
    layui.use(['carousel'],function () {
        var carousel=layui.carousel;
        carousel.render({
           elem:'#carouselContainer',
           arrow:'always',
           interval:3500,
            width:'100%',
           height:'85%'
        });

    })

})