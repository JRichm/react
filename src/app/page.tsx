"use client"
import { useState } from 'react'

import LeftNav from '@/components/nav'
import CalendarComponent from '@/components/calendar'
import DateDetails from '@/components/dateDetails'
import NewNote from '@/components/newNote'

import '@/styles/styles.css'

const currentDate = new Date()
export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date)
  }

  return (
    <>
      <div className="flex flex-row justify-start">
        <LeftNav />
        <div className="flex flex-row w-full">
          <CalendarComponent selectedDate={selectedDate} onDateClick={handleDateClick} />
          <DateDetails selectedDate={selectedDate} />
        </div>
      </div>
    </>
  )
}