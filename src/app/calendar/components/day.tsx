"use client"

export default function Day({date, notes, selectedDate}) {
    let style
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

    if (date == selectedDate) {
        style = 'border border-black border-1'
    } else {
        style = ''
    }

    return (
        <>
            <div className={`${style} hover:outline hover:outline-1 hover:outline-gray-200 m-1 p-1 h-16`}>
                <div>
                    <span>
                        <p className='p-0 m-0'>{date.getDate()}</p>
                    </span>
                    <div className='flex flex-row'>
                        {noteDotElements()}
                    </div>
                </div>
            </div>
        </>
    )
}