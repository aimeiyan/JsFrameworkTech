/**
 * Created by Yanam on 7/14/2016.
 */
!function ($) {

    var defaults = {   //定义默认参数
        position: "top",
        animationTime: 500,
        easing: 'ease-in-out',
        offset: 20,
        hidePlaceholderOnFocus: true
    };

    //添加lable的动画
    $.fn.animateLabel = function (settings) {
        var position = settings.position;
        var posx = 0, posy = 0;

        $(this).css({
            "left": "auto",
            "right": "auto",
            "position": "absolute",
            "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
            "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
            "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
            "transition": "all " + settings.animationTime + "ms " + settings.easing
        });

        switch (position) {
            case "top":
                posx = 0;
                posy = ($(this).height() + settings.offset) * (-1);
//                posy = 0;

                $(this).css({
                    "top": "0",
                    "opacity": "1",
                    "-webkit-transform": "translate3d(" + posx + "," + posy + "px,0)",
                    "-moz-transform": "translate3d(" + posx + "," + posy + "px,0)",
                    "-ms-transform": "translate3d(" + posx + ", " + posy + "px, 0)",
                    "transform": "translate3d(" + posx + ", " + posy + "px, 0)"
                });
                break;
        }

    };

    //移除lable的动画
    $.fn.removeAnimate = function () {
        var posx = 0, posy = 0;

        $(this).css({
            "top": "0",
            "opacity": "0",
            "-webkit-transform": "translate3d(" + posx + ", " + posy + "px, 0)",
            "-moz-transform": "translate3d(" + posx + ", " + posy + "px, 0)",
            "-ms-transform": "translate3d(" + posx + ", " + posy + "px, 0)",
            "transform": "translate3d(" + posx + ", " + posy + "px, 0)"
        });
    };

    //添加label
    $.fn.label_better = function (options) {
        var settings = $.extend({}, defaults, options);
        var $elem = $(this);
        var triggerIn = "focus", triggerOut = "blur";

        if (settings.easing == "bounce") settings.easing = "cubic-bezier(0.175, 0.885, 0.420, 1.310)";

        $elem.each(function (index, domEle) {
            var $domEle = $(domEle);
            var position = settings.position;
            var text = $domEle.attr("new-placeholder") || $domEle.attr("placeholder");

            $domEle.wrapAll("<div class='lb_wrap' style='position: relative;display: block;'></div>");

            if ($domEle.val().length > 0) {
                $("<div class='lb_label " + position + "'>" + text + "</div>").css("opacity", "0").insertAfter($domEle).animateLabel(settings);
            }

            $domEle.on(triggerIn, function () {
                $(this).parent().find(".lb_label").remove();
                if ($(this).val().length < 1) {
                    $("<div class='lb_label " + position + "'>" + text + "</div>").css("opacity", "0").insertAfter($domEle).animateLabel(settings);
                }
                if (settings.hidePlaceholderOnFocus == true) {
                    $(this).attr("placeholder", "");
                }
                $(this).parent().find(".lb_label").addClass("active");
            }).on(triggerOut, function () {
                if ($(this).val().length < 1) {
                    $(this).parent().find(".lb_label").removeAnimate();
                }

                if (settings.hidePlaceholderOnFocus == true) {
                    $(this).attr("placeholder", text);
                }

            })

        })

    };
}(window.jQuery);