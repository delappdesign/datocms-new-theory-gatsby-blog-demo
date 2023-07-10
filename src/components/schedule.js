import React from "react";
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar'
import dayjs from "dayjs"
import myEventsList from "../events/test-events"
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs)

const calendarStyles = {
    marginTop: 100,
    marginBottom: 40,
    height: 500,
}

export default function MyCalendar(props) {

  // function eventStyleGetter(event, start, end, isSelected) {
  //   console.log(event);
  //   var backgroundColor = '#' + event.hexColor;
  //   var style = {
  //       backgroundColor: backgroundColor,
  //       borderRadius: '0px',
  //       opacity: 0.8,
  //       color: 'black',
  //       border: '0px',
  //       display: 'block'
  //   };
  //   return {
  //       style: style
  //   };
  // }

  return(
    <div>
       <Calendar
          defaultView={Views.DAY}
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          drilldownView={Views.DAY}
          style={calendarStyles}
        />
      </div>
  );
}