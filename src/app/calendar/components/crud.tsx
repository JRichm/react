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
