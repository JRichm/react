"use client"

let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
console.log(currentMonth)


let viewMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

export default function CalendarComponent() {
    return (
        <>
            <div className="outline outline-1 p-2 m-5">
                <CalendarHeader />
                <Calendar month={viewMonth}/>
            </div>
        </>
    )
}

export function CalendarHeader() {
    return (
        <>
            <span className="flex flex-row justify-between text-xl">
                <h1 className="p-3">{ viewMonth.toLocaleString('default', {month: 'long'}) }</h1>
                <span>
                    <button>⬅</button>
                    <button>➞</button>
                </span>
            </span>
        </>
    )
}

export function Calendar(props) {

    console.log(props.month)
    console.log(props.month.getDay())

    const dayComponents = [];
    let dayOfMonth
    let numDays = daysInMonth(props.month.getFullYear(), props.month.getMonth())

    for (let i = 1; i <= 42; i++) {
        dayOfMonth = i - props.month.getDay()

        if (dayOfMonth <= 0) {
            dayComponents.push(<Day key={i} day={daysInMonth(props.month.getFullYear(), props.month.getMonth()) - -dayOfMonth} />)
        } else if (dayOfMonth < numDays) {
            dayComponents.push(<Day key={i} day={i - props.month.getDay()} />)
        } else {
            dayComponents.push(<Day key={i} day={i - numDays - props.month.getDay() + 1} />)
        }
    }

    return (
        <>
            <div className="grid gap-0 grid-cols-7 w-[800px]">
                {dayComponents}
            </div>
        </>
    )

    // let month = currentMonth

    // const numDays = daysInMonth(viewMonth.getMonth(), viewMonth.getFullYear())
    // const firstDay = getFirstDayOfWeek(viewMonth.getMonth(), viewMonth.getFullYear())
    // const dayComponents = [];

    // console.log("firstDay: ", firstDay)

    // for (let day = -2 - firstDay; day <= numDays; day++) {
    //     if (day > 0) dayComponents.push(<Day key={day} day={day} />)
    //     else dayComponents.push(<Day key={day} day={daysInMonth(viewMonth.getMonth(), currentYear) + day} />)
    // }

    // return (
    //     <>
    //     </>
    // )
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

function getFirstDayOfWeek(month, year) {
    console.log('params: ', month, year);

    const firstDayOfMonth = new Date(year, month - 1);

    console.log('first day of the month: ', firstDayOfMonth)

    return firstDayOfMonth.getDay();
}

function clickDay(e) {
    console.log(e)
}

var daysInMonth = function(y, m) {
    return new Date(y, m, 0).getDate()
}