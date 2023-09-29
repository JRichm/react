"use client"

export default function Day({date, notes, selectedDate}) {
    let selectedStyle
    let currentDateStyle
    console.log(date.getDate(), notes)

    function noteDotElements() {
        let noteDots = []
        notes.forEach(note => {
            noteDots.push(
                <p className=''>•</p>
            )
        })

        return noteDots
    }

    console.log(selectedDate)

    if (date.getMonth() == selectedDate.getMonth() && date.getDate() == selectedDate.getDate()) {
        selectedStyle += 'border border-gray-200 border-1 shadow-sm shadow-black/50'
    }

    const currentDate = new Date()
    if (date.getMonth() == currentDate.getMonth() && date.getDate() == currentDate.getDate()) {
        currentDateStyle = 'rounded-full bg-blue-500 text-center text-white'
    }

    return (
        <>
            <div className={`${selectedStyle} hover:outline hover:outline-1 hover:outline-gray-200 m-1 p-1 h-16`}>
                <div>
                    <span>
                        <p className={`w-6 h-6 text-center  ${currentDateStyle}`}>{date.getDate()}</p>
                    </span>
                    <div className='flex flex-row'>
                        {noteDotElements()}
                    </div>
                </div>
            </div>
        </>
    )
}