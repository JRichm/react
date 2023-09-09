import React, { useState } from 'react';
let fakeNotes = ['note 1', 'note 2']

export default function DayDetails({selectedDate, dateNotes}) {

    const [addingNote, setAddingnote] = useState(false);

    let noteElements = []

    dateNotes.forEach(note => {
        noteElements.push(
            <>
                <li>{ note }</li>
                <hr />
            </>
        )
    })
    

    return(
        <> 
            <div className="m-5 p-2 w-full">
                <h1 className="text-xl p-3">{ selectedDate.toLocaleString('default', { month: 'long', day: "numeric" }) }, { selectedDate.getFullYear() }</h1>
                <hr className="w-full"></hr>
                <ul>
                    {noteElements}
                </ul>
                <NewNote addingNote={addingNote} setAddingnote={setAddingnote}/>
            </div>
        </>
    )
}

function NewNote({addingNote, setAddingnote}) {
    if (addingNote) {
        return (
            <>
                <form className='flex flex-col my-5 p-2 border border-solid border-black'>
                    <input type='text' placeholder='note title' className='border-none outline-none m-2'></input>
                    <hr />
                    <textarea placeholder='new note' className='border-none outline-none m-2'></textarea>
                    <input type="submit" value={"add"} className='hover:cursor-pointer bg-gray-200 px-3 m-2'></input>
                </form>
            </>
        )
    } else {
        return (
            <>
                <img className="h-8 text-center opacity-20 m-6" src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png" onClick={e => setAddingnote(true)}></img>
            </>
        )
    }
}