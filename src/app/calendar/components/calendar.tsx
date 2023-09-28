'use client'
import React, { useState, useEffect } from 'react';

import '@/styles/styles.css'
import Day from "./day"
import { getNotesForMonth } from './crud'

export default function Calendar() {
    const dayElements = []

    const [viewMonth, setViewMonth] = useState(new Date())
    const [notesForMonth, setNotesForMonth] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())

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

        let day = <Day date={new Date(loopDay)} notes={noteData} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        dayElements.push(day)
    }

    return (
        <>
            <div className='flex flex-col gap-5 m-12'>
                <div className="border border-1 border-black rounded-md">
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
                <div className='border border-1 border-gray-200 rounded shadow'>
                    <form className='flex flex-row'>
                        <div className='flex flex-col w-2/3 shadow-sm border border-1 border-gray-200 p-1 m-2 rounded'>
                            <input type='text' placeholder='note title' className='outline-none p-2'></input>
                            <hr />
                            <textarea placeholder='new note' className='outline-none p-2 h-36 resize-none'></textarea>
                        </div>
                        <div className='flex flex-col w-1/3 justify-between'>
                            <div className='flex flex-row justify-center'>
                                <input name='date-from' type='date' className='w-fit m-5' value={selectedDate.toISOString().split('T')[0]} onChange={e => setSelectedDate(new Date(e.target.value))}></input>
                            </div>
                            <div className='flex flex-col'>
                                <div className='grid gap-1 grid-cols-6 h-fit w-fit [&>button]:rounded-full self-center m-3 [&>button]:shadow [&>button]:border [&>button]:border-black/30'>
                                    <button className='bg-red-500 text-red-500 w-9 h-6'>•</button>
                                    <button className='bg-orange-400 text-orange-400 w-9 h-6'>•</button>
                                    <button className='bg-yellow-300 text-yellow-300 w-9 h-6'>•</button>
                                    <button className='bg-green-500 text-green-500 w-9 h-6'>•</button>
                                    <button className='bg-blue-500 text-blue-500 w-9 h-6'>•</button>
                                    <button className='bg-purple-500 text-purple-500 w-9 h-6'>•</button>
                                    <button className='bg-slate-200 text-slate-200 w-9 h-6'>•</button>
                                    <button className='bg-gray-300 text-gray-300 w-9 h-6'>•</button>
                                    <button className='bg-zinc-600 text-zinc-600 w-9 h-6'>•</button>
                                    <button className='bg-neutral-800 text-neutral-800 w-9 h-6'>•</button>
                                </div>
                                <div className='grid grid-cols-2 gap-2 m-2 w-fit self-end'>
                                    <button className='border border-1 border-black/20 rounded p-1 bg-red-400/75 text-red-800/90 hover:text-black/75 hover:border-black/50'>Cancel</button>
                                    <button className='border border-1 border-black/20 rounded p-1 bg-green-500/50 text-green-800/90 hover:text-black/75 hover:border-black/50'>Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
