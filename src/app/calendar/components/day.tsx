"use client"
import React, { useState } from 'react';

export default function Day({date, notes}) {

    const [calDate, setCalDate] = useState(date)
    const [dayNotes, setDayNotes] = useState(notes)
    let noteDots = []

    dayNotes.forEach(note => {
        noteDots.push(
            <p className='p-0 m-0 w-0 h-0'>•</p>
        )
    })

    return (
        <>
            <div className="hover:outline hover:outline-1 hover:outline-gray-200 m-1 p-1 h-16">
                <div>
                    <span>
                        <p className='p-0 m-0'>{calDate.getDate()}</p>
                    </span>
                    <div className='p-0 h-0 m-0'>
                        {noteDots}
                    </div>
                </div>
            </div>
        </>
    )
}