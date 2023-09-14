"use client"
import React, { useState } from 'react';
import { prisma } from "@/db"
import { addNote, get_notes_for_date } from "@/../crud"
import { useServerData } from "@/components/dayDetails.server"
let fakeNotes = ['note 1', 'note 2']

export default async function DayDetails({selectedDate}) {
    const [addingNote, setAddingnote] = useState(false);

    const { noteQuery } = await useServerData(selectedDate);

    const noteElements = noteQuery.map((note) => (
        <li key={note.id}>
            <div>ID: {note.id}</div>
            <div>Title: {note.title}</div>
            <div>Note: {note.note}</div>
        </li> 
    ))    

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

        const [formData, setFormData] = useState({title: '', data: ''})

        const handleAddNewNote = (e) => {
            e.preventDefault();

            const { title, data } = formData;

            const fromDataObject = new FormData();
            fromDataObject.append('title', title);
            fromDataObject.append('data', data);

            addNote(fromDataObject, selectedDate);

            setFormData({ title: '', data: ''});
        }

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            })
        }

        return (
            <>
                <form className='flex flex-col my-5 p-2 border border-solid border-black rounded' onSubmit={handleAddNewNote}>
                    <input type='text' placeholder='note title' className='border-none outline-none m-2' name="title" onChange={handleInputChange} value={formData.title}></input>
                    <hr />
                    <textarea placeholder='new note' className='border-none outline-none m-2 resize-none' name="data" onChange={handleInputChange} value={formData.data}></textarea>
                    <span className='flex flex-row justify-between'>
                        <button className='hover:cursor-pointer bg-red-200 px-3 m-2 w-full rounded' onClick={e => setAddingnote(false)}>Cancel</button>
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