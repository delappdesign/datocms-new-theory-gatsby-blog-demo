import React from "react";
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar'
import dayjs from "dayjs"
import myEventsList from "../events/test-events"
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs)

const calendarStyles = {
    marginTop: 40,
    marginBottom: 40,
}

export default function MyCalendar(props) {
  // function getBackgroundColor(props) {
  //   console.log(props.style)
  // }

  return(
    <div>
       <Calendar
          defaultView={Views.DAY}
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, marginTop: 100 }}
        />
      </div>
  );
}

// const MyCalendar = (props) => (
  
//   <div>
//     <Calendar
//       defaultView={Views.DAY}
//       localizer={localizer}
//       events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500, marginTop: 100 }}
//     />
//   </div>
// )

// export default MyCalendar