(function($) {
    "use strict";
    function IdleUser(options){
        this.timer = null;
        this.defaults =
            $.extend({
                timer: 10000
            }, options);

    }

    IdleUser.prototype.constructor = IdleUser;

    IdleUser.prototype.init = function(){
        console.log(this.defaults);
        $(window).mousedown(function(){$.idleUser.reset();});
        $(window).mousemove(function(){$.idleUser.reset();});
        $(window).click(function(){$.idleUser.reset();});
        $(window).scroll(function(){$.idleUser.reset();});
        $(window).keypress(function(){$.idleUser.reset();});
        $.idleUser.reset();
    }

    IdleUser.prototype.reset = function(){
        clearTimeout(this.timer);
        this.timer = setTimeout(function(){$.idleUser.logout();}, 3000);
        //console.log('reset time');
    }

    IdleUser.prototype.logout = function(){

    }

    jQuery(document).ready(
        function ()
        {
            $.idleUser = new IdleUser({timer:3000});
            $.idleUser.init();
        });


})(jQuery);
