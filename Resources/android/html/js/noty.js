function noty(options) {
    return jQuery.noty(options);
}

(function($) {
    $.noty = function(options, customContainer) {
        var base = {};
        var $noty = null;
        var isCustom = false;
        base.init = function(options) {
            base.options = $.extend({}, $.noty.defaultOptions, options);
            base.options.type = base.options.cssPrefix + base.options.type;
            base.options.id = base.options.type + "_" + new Date().getTime();
            base.options.layout = base.options.cssPrefix + "layout_" + base.options.layout;
            base.options.custom.container && (customContainer = base.options.custom.container);
            isCustom = "object" === $.type(customContainer) ? true : false;
            return base.addQueue();
        };
        base.addQueue = function() {
            var isGrowl = -1 == $.inArray(base.options.layout, $.noty.growls) ? false : true;
            isGrowl || (base.options.force ? $.noty.queue.unshift({
                options: base.options
            }) : $.noty.queue.push({
                options: base.options
            }));
            return base.render(isGrowl);
        };
        base.render = function(isGrowl) {
            var container = isCustom ? customContainer.addClass(base.options.theme + " " + base.options.layout + " noty_custom_container") : $("body");
            if (isGrowl) {
                0 == $("ul.noty_cont." + base.options.layout).length && container.prepend($("<ul/>").addClass("noty_cont " + base.options.layout));
                container = $("ul.noty_cont." + base.options.layout);
            } else {
                if (!$.noty.available) return base.options.id;
                var fromQueue = $.noty.queue.shift();
                if ("object" !== $.type(fromQueue)) {
                    $.noty.available = true;
                    return base.options.id;
                }
                $.noty.available = false;
                base.options = fromQueue.options;
            }
            base.container = container;
            base.bar = $('<div class="noty_bar"/>').attr("id", base.options.id).addClass(base.options.theme + " " + base.options.layout + " " + base.options.type);
            $noty = base.bar;
            $noty.append(base.options.template).find(".noty_text").html(base.options.text);
            $noty.data("noty_options", base.options);
            base.options.closeButton ? $noty.addClass("noty_closable").find(".noty_close").show() : $noty.find(".noty_close").remove();
            $noty.find(".noty_close").bind("click", function() {
                $noty.trigger("noty.close");
            });
            base.options.buttons && (base.options.closeOnSelfClick = base.options.closeOnSelfOver = false);
            base.options.closeOnSelfClick && $noty.bind("click", function() {
                $noty.trigger("noty.close");
            }).css("cursor", "pointer");
            base.options.closeOnSelfOver && $noty.bind("mouseover", function() {
                $noty.trigger("noty.close");
            }).css("cursor", "pointer");
            if (base.options.buttons) {
                $buttons = $("<div/>").addClass("noty_buttons");
                $noty.find(".noty_message").append($buttons);
                $.each(base.options.buttons, function(i, button) {
                    bclass = button.type ? button.type : "gray";
                    $button = $("<button/>").addClass(bclass).html(button.text).appendTo($noty.find(".noty_buttons")).bind("click", function() {
                        $.isFunction(button.click) && button.click.call($button, $noty);
                    });
                });
            }
            return base.show(isGrowl);
        };
        base.show = function(isGrowl) {
            base.options.modal && $("<div/>").addClass("noty_modal").addClass(base.options.theme).prependTo($("body")).fadeIn("fast");
            $noty.close = function() {
                return this.trigger("noty.close");
            };
            isGrowl ? base.container.prepend($("<li/>").append($noty)) : base.container.prepend($noty);
            ("noty_layout_topCenter" == base.options.layout || "noty_layout_center" == base.options.layout) && $.noty.reCenter($noty);
            $noty.bind("noty.setText", function(event, text) {
                $noty.find(".noty_text").html(text);
                ("noty_layout_topCenter" == base.options.layout || "noty_layout_center" == base.options.layout) && $.noty.reCenter($noty);
            });
            $noty.bind("noty.setType", function(event, type) {
                $noty.removeClass($noty.data("noty_options").type);
                type = $noty.data("noty_options").cssPrefix + type;
                $noty.data("noty_options").type = type;
                $noty.addClass(type);
                ("noty_layout_topCenter" == base.options.layout || "noty_layout_center" == base.options.layout) && $.noty.reCenter($noty);
            });
            $noty.bind("noty.getId", function() {
                return $noty.data("noty_options").id;
            });
            $noty.one("noty.close", function() {
                var options = $noty.data("noty_options");
                options.onClose && options.onClose();
                options.modal && $(".noty_modal").fadeOut("fast", function() {
                    $(this).remove();
                });
                $noty.clearQueue().stop().animate($noty.data("noty_options").animateClose, $noty.data("noty_options").speed, $noty.data("noty_options").easing, $noty.data("noty_options").onClosed).promise().done(function() {
                    if ($.inArray($noty.data("noty_options").layout, $.noty.growls) > -1) $noty.parent().remove(); else {
                        $noty.remove();
                        $.noty.available = true;
                        base.render(false);
                    }
                });
            });
            base.options.onShow && base.options.onShow();
            $noty.animate(base.options.animateOpen, base.options.speed, base.options.easing, base.options.onShown);
            base.options.timeout && $noty.delay(base.options.timeout).promise().done(function() {
                $noty.trigger("noty.close");
            });
            return base.options.id;
        };
        return base.init(options);
    };
    $.noty.get = function(id) {
        return $("#" + id);
    };
    $.noty.close = function(id) {
        for (var i = 0; $.noty.queue.length > i; ) $.noty.queue[i].options.id == id ? $.noty.queue.splice(id, 1) : i++;
        $.noty.get(id).trigger("noty.close");
    };
    $.noty.setText = function(id, text) {
        $.noty.get(id).trigger("noty.setText", text);
    };
    $.noty.setType = function(id, type) {
        $.noty.get(id).trigger("noty.setType", type);
    };
    $.noty.closeAll = function() {
        $.noty.clearQueue();
        $(".noty_bar").trigger("noty.close");
    };
    $.noty.reCenter = function(noty) {
        noty.css({
            left: ($(window).width() - noty.outerWidth()) / 2 + "px"
        });
    };
    $.noty.clearQueue = function() {
        $.noty.queue = [];
    };
    var windowAlert = window.alert;
    $.noty.consumeAlert = function(options) {
        window.alert = function(text) {
            options ? options.text = text : options = {
                text: text
            };
            $.noty(options);
        };
    };
    $.noty.stopConsumeAlert = function() {
        window.alert = windowAlert;
    };
    $.noty.queue = [];
    $.noty.growls = [ "noty_layout_topLeft", "noty_layout_topRight", "noty_layout_bottomLeft", "noty_layout_bottomRight" ];
    $.noty.available = true;
    $.noty.defaultOptions = {
        layout: "top",
        theme: "noty_theme_default",
        animateOpen: {
            height: "toggle"
        },
        animateClose: {
            height: "toggle"
        },
        easing: "swing",
        text: "",
        type: "alert",
        speed: 500,
        timeout: 5e3,
        closeButton: false,
        closeOnSelfClick: true,
        closeOnSelfOver: false,
        force: false,
        onShow: false,
        onShown: false,
        onClose: false,
        onClosed: false,
        buttons: false,
        modal: false,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        cssPrefix: "noty_",
        custom: {
            container: null
        }
    };
    $.fn.noty = function(options) {
        return this.each(function() {
            new $.noty(options, $(this));
        });
    };
})(jQuery);