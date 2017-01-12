(function ($) {  //匿名函数

    function CircleProgress(config) {
//            console.log(config);
//            console.log(config.el);
//            console.log(config.el.attr("class"));
        this.init(config);
    }

    CircleProgress.prototype = {
        //--------------------------------------------- public options----------------------------------------------

        value: 0.0,
        size: 100.0,
        startAngle: -Math.PI,
        thickness: 'auto',
        fill: {
            gradient: ['#3aeabb', '#fdd250']
        },
        emptyFill: 'rgba(0,0,0,.1)',
        animation: {
            duration: 1200,
            easing: 'circleProgressEasing'
        },
        animationStartValue: 0.0,
        reverse: false,
        lineCap: "butt",
        constructor: CircleProgress,
        el: null,
        canvas: null,
        ctx: null,
        radius: 0.0,
        arcFill: null,
        lastFrameValue: 0.0,
        init: function (config) {
//                console.log(this,"----+++111");

            $.extend(this, config);
//                console.log(this,"---+++222");

//                console.log(this.size);
            this.radius = this.size / 2;
            this.initWidget();
            this.initFill();
            this.draw();
        },
        initWidget: function () {
            //console.log(this.el, '????');
            var canvas = this.canvas = $('<canvas>').prependTo(this.el)[0];
            canvas.width = this.size;
            canvas.height = this.size;
            this.ctx = canvas.getContext('2d');
        },

        initFill: function () {
            var self = this,
                fill = this.fill,
                ctx = this.ctx,
                size = this.size;

            if (fill.gradient) {
                var gr = fill.gradient;

                if (gr.length > 1) {
                    var ga = fill.gradientAngle || 0;
                    var gd = fill.gradientDirection || [
                            size / 2 * (1 - Math.cos(ga)),  //x0
                            size / 2 * (1 + Math.sin(ga)), // y0    size/2
                            size / 2 * (1 + Math.cos(ga)), // x1    size
                            size / 2 * (1 - Math.sin(ga))  // y1    size/2
                        ];


                    //通过call或apply方法，将原本属于ctx对象的createLinearGradient()方法交给当前对象ctx来使用了。
                    var lg = ctx.createLinearGradient.apply(ctx, gd);

                    for (var i = 0; i < gr.length; i++) {
                        var color = gr[i],
                            pos = i / (gr.length - 1);
                        lg.addColorStop(pos, color);

                    }
                    this.arcFill = lg;
                }
            }
        },

        draw: function () {
            if (this.animation) {
                this.drawAnimated(this.value);
            } else {
                this.drawFrame(this.value);
            }
        },
        drawAnimated: function (v) {
            var self = this, el = this.el;
            //console.log(this, '----');
            el.trigger('circle-animation-start');
            $(this.canvas)
                .stop(true, true)
                .css({animationProgress: 0})
                .animate({animationProgress: 1}, $.extend({}, this.animation, {
                    step: function (animationProgress) {
                        var stepValue = self.animationStartValue * (1 - animationProgress) + v * animationProgress;
                        self.drawFrame(stepValue);
                        el.trigger('circle-animation-progress', [animationProgress, stepValue]);
                    },
                    complete: function () {
                        el.trigger('circle-animation-end');
                    }
                }))
        },
        drawFrame: function (v) {
            this.lastFrameValue = v;
            this.ctx.clearRect(0, 0, this.size, this.size);
            this.drawEmptyArc(v);
            this.drawArc(v);
        },
        drawArc: function (v) {
            var ctx = this.ctx,
                r = this.radius,
                t = this.getThickness(),
                a = this.startAngle;

            ctx.save();
            ctx.beginPath();

            if (!this.reverse) {
                ctx.arc(r, r, r - t / 2, a, a + Math.PI * 2 * v);
            } else {
                ctx.arc(r, r, r - t / 2, a - Math.PI * 2 * v, a);
            }

            ctx.lineWidth = t;
            ctx.lineCap = this.lineCap;
            ctx.strokeStyle = this.arcFill;
            ctx.stroke();
            ctx.restore();
        },
        drawEmptyArc: function (v) {
            var ctx = this.ctx,
                r = this.radius,
                t = this.getThickness(),
                a = this.startAngle;

            if (v < 1) {
                ctx.save();
                ctx.beginPath();

                if (v <= 0) {
                    ctx.arc(r, r, r - t / 2, 0, Math.PI * 2);
                } else {
                    if (!this.reverse) {
                        ctx.arc(r, r, r - t / 2, a + Math.PI * 2 * v, a);
                    } else {
                        ctx.arc(r, r, r - t / 2, a, a - Math.PI * 2 * v);
                    }
                }

                ctx.lineWidth = t;
                ctx.strokeStyle = this.emptyFill;
                ctx.stroke();
                ctx.restore();
            }
        },
        getThickness: function () {
            return $.isNumeric(this.thickness) ? this.thickness : this.size / 14;
        }


    };
    //-------------------------------------------- Initiating jQuery plugin --------------------------------------------
    $.circleProgress = {
        // Default options (you may override them)
        defaults: CircleProgress.prototype
    };

    // ease-in-out-cubic
    $.easing.circleProgressEasing = function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };

    /**
     *
     * @param config
     * @returns {*}
     */
    $.fn.circleProgress = function (config) {
        return this.each(function () {
            var $el = $(this);
            var cfg = $.isPlainObject(config) ? config : {};
            cfg.el = $el;    //cfg是对象，此处为cfg对象增加了el属性和该属性对应的值。
            var instance = new CircleProgress(cfg);
        })
    }
})(jQuery);