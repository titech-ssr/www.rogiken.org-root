document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('events-list');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'ja',
    initialView: 'listMonth',
    googleCalendarApiKey: "AIzaSyADLXqxz-AFLrSgnDuyHn40xeqdnBeJELk",
    eventSources: [
    {
      googleCalendarId: "rogyevent@gmail.com"
    },
    {
			googleCalendarId: 'ja.japanese#holiday@group.v.calendar.google.com'
		}
  ],
  eventClick: function(info) { // クリックした時にgoogle calendarに飛ばないようにする
    info.jsEvent.preventDefault();
  },
  eventDidMount: (e)=>{ // イベントの上にhoverした時にイベントのタイトルを表示
    tippy(e.el, {
      content: e.event.title,
    });
    
  },

  });
  calendar.render();
});
