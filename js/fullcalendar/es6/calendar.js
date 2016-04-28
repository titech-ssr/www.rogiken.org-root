(()=>{
var datemap = ["日","月","火","水","木","金","土"];

var date = (d)=>{
  return `${d.year()}/${d.month()+1}/${d.date()}(${datemap[d.day()]})`;
}

var time = (d)=>{
  return `${d.hours()}:${(m = d.minutes()) < 10 ? "0" + m : m}`;
}

	$(document).ready(function() {
	
		$('#calendar').fullCalendar({

			// THIS KEY WON'T WORK IN PRODUCTION!!!
			// To make your own Google API key, follow the directions here:
			// http://fullcalendar.io/docs/google_calendar/
			//googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',
			googleCalendarApiKey: 'AIzaSyDfmD-9UVDPUjsiVk-K2GSf8x_2IoCjYe8',
		
			eventClick: function(event) {
        var s = `${event.title}\n${event.description == null ? "" : event.description + "\n"}${date(event.start)}\n${time(event.start)}-${time(event.end)}`;
        console.log(s);
        alert(s);
				return false;
			},

      timeFormat: 'H:mm',
      weekends: true,
      titleFormat:{
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
      eventSources: [
        {
          url: 'jeatmok45tmphf3ip4i4njhjrk@group.calendar.google.com',
          className: "gcal",
          backgroundColor: "#4683FF",
          borderColor: "#4683FF"
        }
      ],

			
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
			
		});
		
	});
})();
