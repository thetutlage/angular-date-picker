! function(e) {
    e.module("angular.datepicker", []).service("Pikaday", ["$window", function(e) {
        var t = e.Pikaday;
        return delete e.Pikaday, t
    }]).directive("pickaDay", ["Pikaday", function(e) {
        return {
            restrict: "A",
            scope: {
                format: "@",
                minDate: "@",
                maxDate: "@",
                disableWeekends: "@",
                yearRange: "@",
                defaultDate: "@",
                onSelect: "=",
                onOpen: "=",
                onClose: "=",
                onDraw: "="
            },
            link: function(t, n) {
                var a = null;
                t.$watchGroup(["format", "minDate", "maxDate", "disableWeekends", "yearRange", "defaultDate"], function() {
                    a && a.destroy();
                    var o = new Date,
                        i = t.format || "YYYY-MM-D",
                        f = "undefined" != typeof t.defaultDate ? new Date(t.defaultDate) : !1,
                        r = "undefined" != typeof t.minDate ? new Date(t.minDate) : !1,
                        d = "undefined" != typeof t.maxDate ? new Date(t.maxDate) : !1,
                        u = !!t.disableWeekends || !1,
                        l = t.yearRange || [2e3, o.getFullYear()];
                    a = new e({
                        field: n[0],
                        format: i,
                        minDate: r,
                        maxDate: d,
                        numberOfMonths: 3,
                        setDefaultDate: !0,
                        defaultDate: f,
                        disableWeekends: u,
                        yearRange: l,
                        onSelect: function() {
                            t.onSelect && "function" == typeof t.onSelect && t.onSelect(this.getMoment().format(i), this.getMoment())
                        },
                        onOpen: function() {
                            t.onOpen && "function" == typeof t.onOpen && t.onOpen(this.getMoment().format(i), this.getMoment())
                        },
                        onClose: function() {
                            t.onClose && "function" == typeof t.onClose && t.onClose(this.getMoment().format(i), this.getMoment())
                        },
                        onDraw: function() {
                            t.onDraw && "function" == typeof t.onDraw && t.onDraw(this.getMoment().format(i), this.getMoment())
                        }
                    })
                }), t.$on("$destroy", function() {
                    a.destroy()
                })
            }
        }
    }])
}(angular);