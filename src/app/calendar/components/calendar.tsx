'use client'
import React, { useState, useEffect } from 'react';

import '@/styles/styles.css'
import Day from "./day"
import { getNotesForMonth } from './crud'

export default function Calendar({viewDate}) {
    const dayElements = []

    const [selectedDate, setSelectedDate] = useState(viewDate)
    const [notesForMonth, setNotesForMonth] = useState([])

    // get current time
    const currentDate = new Date()

    // get first day of the calendar ( start calendar on sunday )
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth())
    firstDay.setDate(firstDay.getDate() - firstDay.getDay() - 1)

    // get last day of calendar
    const lastDay = new Date(firstDay)
    lastDay.setDate(firstDay.getDate() + 41)
    console.log('\n\n the first day of the calendar is', firstDay)
    console.log('\n\n the last day of the calendar is', lastDay)

    useEffect(() => {
        async function fetchNotes() {
            try {
                const fetchedNotes = await getNotesForMonth(firstDay, lastDay)
                setNotesForMonth(fetchedNotes)
            } catch(error) {
                console.error(error)
            }
        }
        fetchNotes()
    }, [viewDate])

    const loopDay = new Date(firstDay)
    console.log('( ) new calendar')
    console.log('( ) Creating Days:')

    for (let d = 0; d < 42; d++) {
        loopDay.setDate(loopDay.getDate() + 1)
        var noteData = []
        console.log('(n)', loopDay.toLocaleString())
        console.log('\tSearching Notes For Date...\n')


        for (let n = 0; n < notesForMonth.length; n++) {
            if (notesForMonth[n].dateAttatched.getDate() == loopDay.getDate() && notesForMonth[n].dateAttatched.getMonth() == loopDay.getMonth()) {
                console.log('\t\t', notesForMonth[n].title, '\n\n')
                noteData.push(notesForMonth[n])
                console.log('\t\t(+) pushing', noteData, '\n')
            }
        }

        let day = <Day date={new Date(loopDay)} notes={noteData} />
        dayElements.push(day)
    }

    return (
        <>
            <div className="m-12 border border-1 border-black rounded-md">
                <div className="flex flex-row gap-4 align-center justify-between m-3">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl">{ new Date().toLocaleString('default', { month: 'long', day: "numeric" }) }, { new Date().getFullYear() }</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="">{ firstDay.toLocaleString('default', { month: 'long', day: "numeric" }) } - { lastDay.toLocaleString('default', { month: 'long', day: "numeric" }) }</p>
                        <span className="flex flex-row gap-4 font-bold justify-end">
                            <p>«</p>
                            <p>»</p>
                        </span>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="grid gap-0 grid-cols-7 w-[800px]">
                        {dayElements}
                    </div>
                </div>
            </div>
        </>
    )
}
