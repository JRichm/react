'use server'
import { prisma } from "@/db"

export async function get_notes_for_date(date) {
    const notes = await prisma.calendarNote.findMany({
        where: {
            dateAttatched: date,
        },
    })
    
    return notes
}

export async function addNote(data: FormData, selectedDate) {
    const noteTitle = data.get("title")?.valueOf()
    const noteData = data.get("data")?.valueOf()
    
    console.log('\tnew note to add\n')
    console.log(noteTitle)
    console.log(noteData)

    if (typeof noteTitle !== "string" || noteTitle.length === 0) {
        throw new Error("Invalid Note Title");
    } else if (typeof noteData !== "string" || noteData.length === 0) {
        throw new Error("Invalid Note Data");
    }

    await prisma.calendarNote.create({data:
        {title: noteTitle, note: noteData, dateAttatched: selectedDate}
    })
    console.log('added note titled: ', noteTitle)
}