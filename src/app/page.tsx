"use client"

import React, { useState } from 'react'

import LeftNav from '@/components/nav'
import CalendarComponent from '@/components/calendar'
import DayDetails from '@/components/dayDetails'
import NewNote from '@/components/newNote'

import {notes_for_date} from "@/../crud"

import '@/styles/styles.css'

const currentDate = new Date()
export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateNotes = undefined ? notes_for_date(selectedDate) : ['No notes'];

  return (
    <>
      <div className="flex flex-row justify-start">
        <LeftNav />
        <div className="flex flex-row w-full">
          <CalendarComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          <DayDetails selectedDate={selectedDate} dateNotes={dateNotes}/>
        </div>
      </div>
    </>
  )
}