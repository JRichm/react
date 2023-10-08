// // CRUD file hold functions that interact with the database
"use server"
import { prisma } from "@/db"


// // CREATE

// adds a note to the db
export async function add_note(data: FormData, selectedDate) {
    const noteTitle = data.get("title")?.valueOf()
    const note = data.get("note")?.valueOf()
    
    console.log('\tnew note to add\n')
    console.log(noteTitle)
    console.log(note)

    if (typeof noteTitle !== "string" || noteTitle.length === 0) {
        throw new Error("Invalid Note Title");
    } else if (typeof note !== "string" || note.length === 0) {
        throw new Error("Invalid Note Data");
    }

    await prisma.calendarNote.create({data:
        {title: noteTitle, note: note, dateAttatched: selectedDate}
    })
    console.log('added note titled: ', noteTitle)
}

// // READ

// return a list of notes for a specific date
export async function get_notes_for_date(date) {
    const notes = await prisma.calendarNote.findMany({
        where: {
            dateAttatched: date,
        },
    })
    
    return notes
}

