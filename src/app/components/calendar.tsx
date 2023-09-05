"use client"

let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
console.log(currentMonth)


let viewMonth = currentMonth;

export default function CalendarComponent() {
    return (
        <>
            <div className="outline outline-1 p-2">
                <CalendarHeader />
                <Calendar />
            </div>
        </>
    )
}

export function CalendarHeader() {
    return (
        <>
            <span>
                <h1>{ viewMonth }</h1>
            </span>
        </>
    )
}

export function Calendar() {

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
            <div className="grid gap-0 grid-cols-7 w-[800px]">
                {dayComponents}
            </div>
        </>
    )
}

export function Day(props) {
    return (
        <>
            <div className="hover:outline hover:outline-1 hover:outline-gray-500" onClick={clickDay}>
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