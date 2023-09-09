import React, { useState } from 'react';
import { prisma } from "@/db"
import { addNote } from "@/../crud"
let fakeNotes = ['note 1', 'note 2']

export default function DayDetails({selectedDate, dateNotes}) {

    const [addingNote, setAddingnote] = useState(false);

    let noteElements = [];

    dateNotes.forEach(note => {
        noteElements.push(
            <>
                <li>{ note }</li>
            </>
        )
    })
    

    return(
        <> 
            <div className="m-5 p-2 w-full">
                <h1 className="text-xl p-3">{ selectedDate.toLocaleString('default', { month: 'long', day: "numeric" }) }, { selectedDate.getFullYear() }</h1>
                <hr className="w-full"></hr>
                <ul className='marker:text-black list-disc p-5 space-y-3'>
                    { noteElements }
                </ul>
                <hr />
                <NewNote addingNote={addingNote} setAddingnote={setAddingnote} selectedDate={selectedDate}/>
            </div>
        </>
    )
}

function NewNote({addingNote, setAddingnote, selectedDate}) {
    if (addingNote) {

        return (
            <>
                <form className='flex flex-col my-5 p-2 border border-solid border-black rounded' onSubmit={e => {addNote}}>
                    <input type='text' placeholder='note title' className='border-none outline-none m-2' name="title"></input>
                    <hr />
                    <textarea placeholder='new note' className='border-none outline-none m-2 resize-none' name="data"></textarea>
                    <span className='flex flex-row justify-between'>
                        <button className='hover:cursor-pointer bg-red-200 px-3 m-2 w-full rounded' onClick={e => setAddingnote(false)}>cancel</button>
                        <input type="submit" value={"add"} className='hover:cursor-pointer bg-gray-200 px-3 m-2 w-full rounded'></input>
                    </span>
                </form>
            </>
        )
    } else {
        return (
            <>
                <div className='w-full flex justify-center'>
                    <img className="h-6 text-center opacity-20 m-6" src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png" onClick={e => setAddingnote(true)}></img>
                </div>
            </>
        )
    }
}