define(function () {
    $.extend(eventDispatcher.prototype, {
        /**
         *  register event
         */
        on: function (event, fn) {
            if (!this._events[event]) {
                this._events[event] = [];
            }
            if (!this.has(event, fn)) {
                this._events[event].push(fn);
            }
        },

        /**
         *  register event
         */
        un: function (event, fn) {
            if (!this._events[event]) {
                return false;
            }
            this._events[event] = $.grep(this._events[event], function (elm) {
                if (elm == fn) {
                    return false;
                }
                return true;
            });
        },

        /**
         *  register event
         */
        has: function (event, fn) {
            return this._events[event] && $.inArray(fn, this._events[event]) != -1;
        },

        /**
         *  fire
         */
        fire: function (event, data) {
            if (!this._events[event]) {
                return;
            }
            $.each(this._events[event], function (i, fn) {
                fn(data);
            });
        }
    });

    return eventDispatcher;

    function eventDispatcher() {
        this._events = {};
    }
});
