import NewNote from "@/components/newNote"
import { get_notes_for_date } from "@/../crud"
import { useEffect, useState } from 'react'

export default function DateDetails({ selectedDate }) {

    // assign note state for selected day
    const [notes, setNotes] = useState([])

    // get notes for selected date
    useEffect(() => {
        async function fetchNotes() {
            try {
                const notes = await get_notes_for_date(selectedDate)
                setNotes(notes)
            } catch (error) {
                console.error('Error fetching notes: ', error)
            }
        }

        fetchNotes()
    }, [selectedDate])

    return (
        <>
            <div className="m-5 p-2 w-full">
                <h1 className="text-xl p-3">{ selectedDate.toLocaleString('default', { month: 'long', day: "numeric" }) }, { selectedDate.getFullYear() }</h1>
                <hr className="w-full"></hr>
                <ul className="marker:text-black list-disc p-5 space-y-3">
                    <NoteElements notes={notes}/>
                </ul>
                <hr />
                <NewNote selectedDate={selectedDate} />
            </div>
        </>
    )
}

// create elements for each note retrieved from the database
function NoteElements({ notes }) {

    // loop through notes for day
    const noteElements = notes.map((note) => (
        <li key={note.id}>
            <div>{note.title}</div>
        </li>
    ))

    // if no notes are found
    if (noteElements.length === 0) {
        return false
    }

    // return elements containing notes
    return (
        <>  
            {noteElements}
        </>
    )
}