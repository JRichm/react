export default function JournalEntry(entryData) {
    return (
        <>
            <div style={{backgroundColor: '#ffffff'}} className="m-3 px-3 py-6 shadow rounded-md">
                <div>
                    <h1 className="text-2xl font-bold">{entryData}</h1>
                </div>
                <div>
                    <p>area to display journal entry</p>
                </div>
            </div>
        </>
    )
}