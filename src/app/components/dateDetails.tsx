import NewNote from "@/components/newNote"
import { get_notes_for_date } from "@/../crud"

export default async function DateDetails({selectedDate}) {
    return (
        <>
            <div className="m-5 p-2 w-full">
                <h1 className="text-xl p-3">{ selectedDate.toLocaleString('default', { month: 'long', day: "numeric" }) }, { selectedDate.getFullYear() }</h1>
                <hr className="w-full"></hr>
                <ul className="marker:text-black list-disc p-5 space-y-3">
                    <NoteElements notes={await get_notes_for_date(selectedDate)}/>
                </ul>
                <hr />
                <NewNote />
            </div>
        </>
    )
}


async function NoteElements(notes) {
    const noteElements = notes.map((note) => {
        <li key={note.id}>
            <div>ID: {note.id}</div>
            <div>Title: {note.title}</div>
            <div>Note: {note.note}</div>
        </li>
    })

    let dateElements = (
        <>
            <p>no date elements</p>
        </>
    )

    return (
        <>
            { dateElements }
        </>
    )
}