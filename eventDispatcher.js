define(function () {
    $.extend(eventDispatcher.prototype, {
        /**
         *  register event
         */
        on: function (event, fn) {
            this._events[event] = this._events[event] || [];
            if ( ! this.has(event, fn)) {
                this._events[event].push(fn);
            }
        },

        /**
         *  unregister event
         */
        off: function (event, fn) {
            this._events[event] && (this._events[event] = $.grep(this._events[event], function (elm) {
                return elm != fn;
            }));
        },

        /**
         *  check event
         */
        has: function (event, fn) {
            return this._events[event] && $.inArray(fn, this._events[event]) != -1;
        },

        /**
         *  fire
         */
        fire: function (event, data) {
            var that = this;
            this._events[event] && $.each(this._events[event], function (i, fn) {
                fn.call(that, data);
            });
        }
    });

    return eventDispatcher;

    function eventDispatcher() {
        this._events = {};
    }
});
