'use client'
import React, { useState, useEffect } from 'react';

import '@/styles/styles.css'
import Day from "./day"
import { getNotesForMonth, addCalendarNote } from './crud'
import { text } from 'stream/consumers';

export default function Calendar() {
    const dayElements = []
    const noteColors = [
        'red-500',
        'orange-400',
        'yellow-300',
        'green-500',
        'blue-500',
        'purple-500',
        'slate-200',
        'gray-300',
        'zinc-600',
        'neutral-800'
    ]

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
                <div className="border border-1 border-gray-200 rounded-md shadow shadow-gray-400">
                    <div className="flex flex-row gap-4 align-center justify-between m-3">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-xl">{ viewMonth.toLocaleString('default', { month: 'long' }) } { viewMonth.getFullYear() }</h1>
                        </div>
                        <div className="flex flex-col">
                            <p className="">{ firstDay.toLocaleString('default', { month: 'long', day: "numeric" }) } - { lastDay.toLocaleString('default', { month: 'long', day: "numeric" }) }</p>
                            <span className="flex flex-row gap-4 font-bold justify-end">
                                <button className="m-1" onClick={(e) => {setViewMonth(new Date(firstDay.setMonth(firstDay.getMonth())))}}>&laquo;</button>
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
                <NewCalNoteForm selectedDate={selectedDate} setSelectedDate={setSelectedDate} noteColors={noteColors}/>
            </div>
        </>
    )
}


function NewCalNoteForm({selectedDate, setSelectedDate, noteColors}) {
    const [selectedColor, setSelectedColor] = useState("neutral-800") // buttons dont set the number, buttons set value to 'yello' 'green' 
    const [formData, setFormData] = useState({ title: '', note: '', color: '', date: '' })

    formData.color = selectedColor
    formData.date = selectedDate.toISOString()

    console.log(formData.color)
    console.log(formData.date)

    function handleInputChange(e) {

        // update user input
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function submitNewNote(e) {
        e.preventDefault()

        // create formData object
        const {title, note, date, color} = formData;
        console.log('values from formData')
        console.log('title ', title, 'note ', note)

        const formDataObject = new FormData()
        formDataObject.set('title', title)
        formDataObject.set('note', note)
        formDataObject.set('date', date)
        formDataObject.set('color', color)

        // call crud to add note to database
        try {
            console.log('calling crud')
            addCalendarNote(formDataObject)
        } catch (error) {
            console.log(error)
        }

        // reset  user input
        setFormData({ title: '', note: '', color: '', date: '' }) //color
    }

    return (
        <>
            <div className='border border-1 border-gray-200 rounded shadow'>
                <form className='flex flex-row' onSubmit={submitNewNote}>
                    <div className='flex flex-col w-2/3 shadow-sm border border-1 border-gray-200 p-1 m-2 rounded'>
                        <input type='text' placeholder='note title' className='outline-none p-2' onChange={handleInputChange} name="title"></input>
                        <hr />
                        <textarea placeholder='new note' className='outline-none p-2 h-36 resize-none' onChange={handleInputChange} name="note"></textarea>
                    </div>
                    <div className='flex flex-col w-1/3 justify-between'>
                        <div className='flex flex-row justify-center'>
                            <input name='date' type='date' className='w-fit m-5' value={selectedDate.toISOString().split('T')[0]} onChange={handleInputChange}></input>
                        </div>
                        <div className='flex flex-col'>

                        <div className='grid gap-1 grid-cols-6 h-fit w-fit self-center m-3'>
                            {noteColors.map(color => {
                                if (color == selectedColor) {
                                    return <ColorButton color={color} setSelectedColor={setSelectedColor} selected={true} />
                                } else {
                                    return <ColorButton color={color} setSelectedColor={setSelectedColor} selected={false} />
                                }
                            })}
                        </div>
                            <div className='grid grid-cols-2 gap-2 m-2 w-fit self-end'>
                                <button className='border border-1 border-black/20 rounded p-1 bg-red-400/75 text-red-800/90 hover:text-black/75 hover:border-black/50'>Cancel</button>
                                <button className='border border-1 border-black/20 rounded p-1 bg-green-500/50 text-green-800/90 hover:text-black/75 hover:border-black/50'>Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

function ColorButton({color, setSelectedColor, selected}) {

    color = color.split("-")[0]

    let style = "w-9 h-6 rounded-full shadow border border-black/30 bg-" + color + "-700"

    return (
        <>
            <button className={style} onClick={e => {
                e.preventDefault()
                setSelectedColor(color)
            }}></button>
        </>
    )
}
