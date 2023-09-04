"use client"

let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
console.log(currentMonth)

export default function Calendar() {

    let month = currentMonth

    const numDays = daysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfWeek(currentMonth, currentYear)
    const dayComponents = [];

    console.log("firstDay: ", firstDay)

    for (let day = 1 - firstDay; day <= numDays; day++) {
        if (day > 0) dayComponents.push(<Day key={day} day={day} />)
        else dayComponents.push(<Day key={day} day={daysInMonth(currentMonth-1, currentYear) + day} />)
    }

    return (
        <>
            <span>{currentMonth}</span>
            <span>{currentYear}</span>
            <div className="grid gap-x-1 gap-y-2 grid-cols-7 w-[800px]">
                {dayComponents}
            </div>
        </>
    )
}

export function Day(props) {
    return (
        <>
            <div className="outline outline-1 outline-gray-500" onClick={clickDay}>
                <span>
                    <p>{props.day}</p>
                </span>
                <div className="h-12">

                </div>
            </div>
        </>

    )
}

export function DateDetails() {
    return (
        <>
            <p>fart</p>
        </>
    )
}

export function daysInMonth(month, year) {
    console.log(month)
    if (!month) {
        month = currentMonth;
    }

    if (!year) {
        year = currentYear;
    }

    return new Date(year, month, 0).getDate();
}

function getFirstDayOfWeek(month, year) {
    console.log('params: ', month, year);

    const firstDayOfMonth = new Date(year, month - 1);

    console.log('first day of the month: ', firstDayOfMonth)

    return firstDayOfMonth.getDay();
}

function clickDay(e) {
    console.log(e)
}