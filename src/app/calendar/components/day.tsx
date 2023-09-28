"use client"
import React, { useState } from 'react';

export default function Day({date, notes}) {

    const [calDate, setCalDate] = useState(date)

    console.log(date.getDate(), notes)



    function updateDay({date, notes}) {
        setCalDate(date)
    }

    function noteDotElements() {
        let noteDots = []
        notes.forEach(note => {
            noteDots.push(
                <p className=''>•</p>
            )
        })

        return noteDots
    }

    return (
        <>
            <div className="hover:outline hover:outline-1 hover:outline-gray-200 m-1 p-1 h-16">
                <div>
                    <span>
                        <p className='p-0 m-0'>{calDate.getDate()}</p>
                    </span>
                    <div className='flex flex-row'>
                        {noteDotElements()}
                    </div>
                </div>
            </div>
        </>
    )
}