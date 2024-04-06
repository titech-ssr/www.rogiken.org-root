document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'ja',
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      dayCellContent: function(arg){
        return arg.date.getDate();
      },
      buttonText: {  // ボタンのテキストをカスタマイズ
        today: '今日',
        month: '月',
        week: '週',
        day: '日'
    },
    initialView: 'dayGridMonth',
    googleCalendarApiKey: "AIzaSyADLXqxz-AFLrSgnDuyHn40xeqdnBeJELk",
    eventSources: [
    {
      googleCalendarId: "rogyevent@gmail.com",
      className: "my-events"
    },
    {
			googleCalendarId: 'ja.japanese#holiday@group.v.calendar.google.com'
		}
  ]
  });
  calendar.render();
});