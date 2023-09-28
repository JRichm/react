'use client'
import React, { useState, useEffect } from 'react';

import '@/styles/styles.css'
import Day from "./day"
import { getNotesForMonth } from './crud'

export default function Calendar() {
    const dayElements = []

    const [viewMonth, setViewMonth] = useState(new Date())
    const [notesForMonth, setNotesForMonth] = useState([])

    // get first day of the calendar ( start calendar on sunday )
    const firstDay = new Date(viewMonth.getFullYear(), viewMonth.getMonth())
    firstDay.setDate(firstDay.getDate() - firstDay.getDay() - 1)

    // get last day of calendar
    const lastDay = new Date(firstDay)
    lastDay.setDate(firstDay.getDate() + 41)

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
    }, [viewMonth])

    const loopDay = new Date(firstDay)

    for (let d = 0; d < 42; d++) {
        loopDay.setDate(loopDay.getDate() + 1)
        var noteData = []


        for (let n = 0; n < notesForMonth.length; n++) {
            if (notesForMonth[n].dateAttatched.getDate() == loopDay.getDate() && notesForMonth[n].dateAttatched.getMonth() == loopDay.getMonth()) {
                console.log('\t\t', notesForMonth[n].title, '\n\n')
                noteData.push(notesForMonth[n])
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
                        <h1 className="text-xl">{ viewMonth.toLocaleString('default', { month: 'long' }) } { viewMonth.getFullYear() }</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="">{ firstDay.toLocaleString('default', { month: 'long', day: "numeric" }) } - { lastDay.toLocaleString('default', { month: 'long', day: "numeric" }) }</p>
                        <span className="flex flex-row gap-4 font-bold justify-end">
                            <button className="m-1" onClick={(e) => {setViewMonth(new Date(firstDay.setMonth(firstDay.getMonth() - 1)))}}>&laquo;</button>
                            <button className="m-1" onClick={(e) => {setViewMonth(new Date(firstDay.setMonth(firstDay.getMonth() + 2)))}}>&raquo;</button>
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
