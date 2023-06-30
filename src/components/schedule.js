import React from "react";
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar'
import dayjs from "dayjs"
import myEventsList from "../events/test-events"
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs)

const MyCalendar = (props) => (
  <div>
    <Calendar
      defaultView={Views.DAY}
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar