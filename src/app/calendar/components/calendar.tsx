export default function Calendar() {

    const currentDate = new Date()
    const dayElements = []
    
    const calDate = new Date(currentDate.getFullYear(), currentDate.getMonth())
    calDate.setDate(calDate.getDate() - calDate.getDay() - 1)

    const firstDay = new Date(calDate)
    firstDay.setDate(firstDay.getDate() + 1)

    for (let d = 0; d < 42; d++) {
        calDate.setDate(calDate.getDate() + 1)

        let day = Day(new Date(calDate))
        dayElements.push(day)
    }

    return (
        <>
            <div className="m-12 border border-1 border-black rounded-md">
                <div>
                    <h1 className="text-xl p-3">{ currentDate.toLocaleString('default', { month: 'long', day: "numeric" }) }, { currentDate.getFullYear() }</h1>
                    <p className="font-bold">from: { firstDay.toLocaleString('default', { month: 'long', day: "numeric" }) } to: { calDate.toLocaleString('default', { month: 'long', day: "numeric" }) }</p>
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

function Day(date) {

    return (
        <>
            <div className="hover:outline hover:outline-1 hover:outline-gray-200 m-1 p-1">
                <span>
                    <p>{date.getDate()}</p>
                </span>
                <div className="h-10">
                </div>
            </div>
        </>
    )
}