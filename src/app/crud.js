'use server'
import { prisma } from "@/db"

export async function notes_for_date(date) {
    const notes = await prisma.CalendarNote.findMany({
        where: {
            dateAttatched: date,
        },
    })
    
    return notes
}