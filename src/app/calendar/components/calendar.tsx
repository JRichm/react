import { prisma } from "@/db"
import Day from "./day"

async function getNotesForMonth(fromDate, toDate) {
    return await prisma.calendarNote.findMany({
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
}

export default async function Calendar() {

    const currentDate = new Date()
    const dayElements = []
    
    const calDate = new Date(currentDate.getFullYear(), currentDate.getMonth())
    calDate.setDate(calDate.getDate() - calDate.getDay() - 1)

    const firstDay = new Date(calDate)
    const lastDay = new Date(calDate)
    firstDay.setDate(firstDay.getDate() + 1)
    lastDay.setDate(firstDay.getDate() + 41)

    const notesForMonth = await getNotesForMonth(firstDay, lastDay)
    var notes = notesForMonth

    console.log('( ) new calendar')
    console.log('( ) Creating Days:')

    for (let d = 0; d < 42; d++) {
        calDate.setDate(calDate.getDate() + 1)
        var noteData = []
        console.log('(n)', calDate.toLocaleString())
        console.log('\tSearching Notes...\n')


        if (notes.length > 0) {
            for (let n = 0; n < notes.length; n++) {
                if (notes[n].dateAttatched.getDate() == calDate.getDate() && notes[n].dateAttatched.getMonth() == calDate.getMonth()) {
                    console.log('\t\t', notes[n].title, '\n\n')
                    noteData.push(notes[n])
                    notes.splice(n, 1)
                }
            }
        }

        let day = <Day date={new Date(calDate)} notes={noteData} />
        dayElements.push(day)
    }

    return (
        <>
            <div className="m-12 border border-1 border-black rounded-md">
                <div>
                    <h1 className="text-xl p-3">{ currentDate.toLocaleString('default', { month: 'long', day: "numeric" }) }, { currentDate.getFullYear() }</h1>
                    <p className="font-bold">from: { firstDay.toLocaleString('default', { month: 'long', day: "numeric" }) } to: { lastDay.toLocaleString('default', { month: 'long', day: "numeric" }) }</p>
                </div>
                <div>
                    <div className="grid gap-0 grid-cols-7 w-[800px]">
                        {dayElements}
                    </div>
                </div>
            </div>
        </>
    )
}
