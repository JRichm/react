import JournalEntry from './components/journalEntry'
import { prisma } from "@/db"

async function getJournalEntries() {
    const journalEntries = await prisma.journalEntry.findMany()

    const journalElements = []

    journalEntries.forEach(entry => {
        journalElements.push(JournalEntry(entry))
    })

    return journalElements
}

export default async function Blog() {
    const journalElements = await getJournalEntries()

    const todaysDate = new Date()

    return (
        <>
            <div className="w-full flex flex-col align-center">
                <div className='flex justify-center'>
                    <div style={{backgroundColor: '#dddddd'}} className='w-1/2 h-36 flex flex-col justify-between p-3'>
                        <span className='flex flex-row justify-between'> 
                            <p>{todaysDate.toLocaleDateString()}</p> 
                            <a href="/journal/new">✎ new entry</a>
                        </span>
                        <span className='flex flex-row justify-between'> 
                            <a href='/'>◀ calendar</a>
                            <input type='text' placeholder='Search..'></input>
                        </span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-1/2'>
                        {journalElements}
                    </div>
                </div>
            </div>
        </>
    )
}