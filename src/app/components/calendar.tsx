import Day from '@/components/day'

let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

let viewMonth, viewYear
let selectYears = [];
let selectMonths = [];

if (!selectYears[0]) {
    for (let y = currentYear - 50; y < currentYear + 50; y++) {
        if (y == currentYear) {
            selectYears.push(
                <option value={ y } selected={true}>{ y }</option>
            )
        } else {
            selectYears.push(
                <option value={ y }>{ y }</option>
            )
        }
    }

    for (let m = 1; m <= 12; m++) {
        if (m == currentMonth) {
            selectMonths.push(
                <option value={ m } selected={true}>{ m }</option>
            )
        } else {
            selectMonths.push(
                <option value={ m }>{ m }</option>
            )
        }
    }
}

export default async function CalendarComponent(props) {
    viewYear = props.viewYear ? viewYear : currentYear
    viewMonth = props.viewMonth ? viewMonth : currentMonth - 1

    console.log("viewMonth")
    console.log(viewMonth)
    console.log(viewYear)

    viewMonth = new Date(viewYear, viewMonth - 1)

    return (
        <>
            <div className="outline outline-1 p-2 m-5">
                <CalendarHeader viewMonth={ viewMonth } />
                <hr className="mb-2" />
                <Calendar viewMonth={ viewMonth } />
            </div>
        </>
    )
}

function CalendarHeader(props) {
    return (
        <>
            <span className="flex flex-row justify-between text-xl">
                <span>
                    <h1 className="p-3">{ viewMonth.toLocaleString('default', {month: 'long'}) }</h1>
                </span>
                <span className="flex flex-row align-center">
                    <div className="m-2 flex flex-row align-center">
                        <select name="month" placeholder={viewMonth.getMonth()}>
                            {selectMonths}
                        </select>
                        <select name="year" placeholder={viewMonth.getMonth()}>
                            {selectYears}
                        </select>
                    </div>
                    <div className="m-2 flex flex-row align-center">
                        <button className="m-1">&laquo;</button>
                        <button className="m-1">&raquo;</button>
                    </div>
                </span>
            </span>
        </>
    )
}

export async function Calendar(props) {

    console.log('cal props')
    console.log(props)

    const dayComponents = [];
    let day;
    const calDate = new Date(props.viewMonth.getFullYear(), props.viewMonth.getMonth())
    calDate.setDate(calDate.getDate() - calDate.getDay() - 1)

    for (let d = 0; d < 42; d++) {
        calDate.setDate(calDate.getDate() + 1)
        day = <Day date={new Date(calDate)} viewMonth={props.viewMonth} currentDate={currentDate} />
        dayComponents.push(day)
    }

    return (
        <>
            <div className="grid gap-0 grid-cols-7 w-[800px]">
                {dayComponents}
            </div>
        </>
    )
}

export function DateDetails() {
    return (
        <>
            <p>This is the date details</p>
        </>
    )
}