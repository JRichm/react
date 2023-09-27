import JournalEntry from './components/journalEntry'

function getJournalEntries() {
    const journalElements = []
    const journalEntries = ['entry 1', 'entry 2', 'entry 3']

    journalEntries.forEach(entry => {
        journalElements.push(JournalEntry(entry))
    })

    return journalElements
}

export default async function Blog() {
    const journalEntries = await getJournalEntries()

    return (
        <>
            <div className="w-full flex flex-col align-center">
                <div className='flex justify-center'>
                    <div style={{backgroundColor: '#dddddd'}} className='w-1/2 h-36 flex flex-col justify-between p-3'>
                        <span className='flex flex-row justify-between'> 
                            <p> date </p>
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
                        {journalEntries}
                    </div>
                </div>
            </div>
        </>
    )
}