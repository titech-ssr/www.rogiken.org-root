(function() {
  "use strict";
  var __moduleName = "es6/calendar.js";
  (function() {
    var datemap = ["日", "月", "火", "水", "木", "金", "土"];
    var date = function(d) {
      return (d.year() + "/" + (d.month() + 1) + "/" + d.date() + "(" + datemap[d.day()] + ")");
    };
    var time = function(d) {
      return (d.hours() + ":" + ((m = d.minutes()) < 10 ? "0" + m : m));
    };
    $(document).ready(function() {
      $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyDfmD-9UVDPUjsiVk-K2GSf8x_2IoCjYe8',
        eventClick: function(event) {
          console.log(s = (event.title + "\n" + (event.description == null ? "" : event.description + "\n") + date(event.start) + "\n" + time(event.start) + "-" + time(event.end)));
          alert(s);
          return false;
        },
        timeFormat: 'H:mm',
        weekends: true,
        titleFormat: {
          month: 'YYYY年M月',
          week: 'YYYY年M月D日',
          day: 'YYYY年M月D日'
        },
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        allDaySlot: true,
        allDayText: '',
        eventSources: [{
          url: 'jeatmok45tmphf3ip4i4njhjrk@group.calendar.google.com',
          className: "gcal",
          backgroundColor: "#4683FF",
          borderColor: "#4683FF"
        }],
        loading: function(bool) {
          $('#loading').toggle(bool);
        }
      });
    });
  })();
  return {};
})();
