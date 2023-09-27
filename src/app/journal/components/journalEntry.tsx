export default function JournalEntry(entryData) {
    return (
        <>
            <div style={{backgroundColor: '#ffffff'}} className="m-3 px-3 py-6 shadow rounded-md">
                <div>
                    <h1 className="text-2xl font-bold">{entryData.entryTitle}</h1>
                </div>
                <div>
                    <p>{entryData.entryText}</p>
                </div>
            </div>
        </>
    )
}