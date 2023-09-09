
let fakeNotes = ['note 1', 'note 2']

export default function DayDetails({selectedDate, dateNotes}) {

    let noteElements = []

    dateNotes.forEach(note => {
        noteElements.push(
            <li>{ note }</li>
        )
    })
    

    return(
        <> 
            <div className="m-5 p-2 w-full">
                <h1 className="text-xl p-3">{ selectedDate.toLocaleString('default', { month: 'long', day: "numeric" }) }, { selectedDate.getFullYear() }</h1>
                <hr className="w-full"></hr>
                <ul>
                    {noteElements}
                </ul>
                <div className="w-full flex justify-center">
                    <img className="h-8 text-center opacity-20 m-6" src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png"></img>
                </div>
            </div>
        </>
    )
}