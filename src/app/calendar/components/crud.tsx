// // CRUD file hold functions that interact with the database
"use server"
import { prisma } from "@/db"

export async function getNotesForMonth(fromDate, toDate) {
    console.log('getting notes between', fromDate, 'and', toDate)
    const notes = await prisma.calendarNote.findMany({
        where: {
            dateAttatched: {
                lte: toDate,
                gte: fromDate,
            },
        },
        orderBy: {
            dateAttatched: 'asc'
        }
    })

    console.log('(t)', typeof(notes))
    return notes
}

export async function addCalendarNote(data: FormData) {
    const noteTitle = data.get("title")?.valueOf()
    const note = data.get("note")?.valueOf()
    const noteColor = data.get("color")?.valueOf()
    const noteDate = data.get("date")?.valueOf()
    
    console.log('\tnew note to add\n')
    console.log(noteTitle)
    console.log(note)
    console.log(noteColor)
    console.log(noteDate)

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