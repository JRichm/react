// react component for adding a new 'Note' on a specific day on the calendar


// details needed for note submission
//     note date
//     note title
//     note






export default function NewNote() {
    const today = new Date()

    return (
        <>
        <div>
            <div>
                <h1 className="text-2xl m-5">{ today.toLocaleString('default', { month: 'long', day: "numeric" }) }, { today.getFullYear() }</h1>
            </div>
            <div className="flex flex-col m-5 p-2 outline outline-1 h-80">
                <span>
                    <input placeholder="note title" className="p-2"></input>
                </span>
                <hr className="m-2" />
                <textarea placeholder="note" className="h-full p-2"></textarea>
                <button className="bg-gray-300 mt-2">add note</button>
            </div>
        </div>
        </>
    )
}