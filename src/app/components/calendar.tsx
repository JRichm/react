let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;


let viewMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
let selectYears = []
let selectMonths = []

if (!selectYears[0]) {
    console.log('select years not loaded')
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

export default async function CalendarComponent() {
    return (
        <>
            <div className="outline outline-1 p-2 m-5">
                <CalendarHeader />
                <hr className="mb-2" />
                <Calendar month={viewMonth}/>
            </div>
        </>
    )
}

function CalendarHeader() {
    return (
        <>
            <span className="flex flex-row justify-between text-xl">
                <span>
                    <h1 className="p-3">{ viewMonth.toLocaleString('default', {month: 'long'}) }</h1>
                </span>
                <span className="flex flex-row align-center">
                    <div className="m-2 flex flex-row align-center">
                        <select name="month" placeholder='{currentMonth}'>
                            {selectMonths}
                        </select>
                        <select name="year" placeholder='{currentYear}'>
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

    const dates = []
    const dayComponents = [];
    let day;
    const calDate = new Date()
    calDate.setDate(props.month.getDate() - props.month.getDay() - 1)

    for (let d = 0; d < 42; d++) {
        calDate.setDate(calDate.getDate() + 1)
        day = <Day date={new Date(calDate)} viewMonth={props.month}/>
        dayComponents.push(day)
    }

    let dayOfMonth
    let numDays = daysInMonth(props.month.getFullYear(), props.month.getMonth())

    return (
        <>
            <div className="grid gap-0 grid-cols-7 w-[800px]">
                {dayComponents}
            </div>
        </>
    )
}

export function Day(props) {

    const date = props.date;
    let dayNum;
    console.log(props.date);

    // className for all days
    let className = "";
    
    // days for previous and next month
    if (date.getMonth() != props.viewMonth.getMonth()) {
        className += "text-gray-300";

    // todays date
    } else if (date.getDate() == currentDate.getDate() && date.getMonth() == currentDate.getMonth()) {
        className += "bg-blue-500 w-6 text-center rounded-full text-white";

    // any other day
    } else {
        className += "";
    }

    return (
        <>
            <div className="hover:outline hover:outline-1 hover:outline-gray-500 m-1 p-1">
                <span>
                    <p className={className}>{props.date.getDate()}</p>
                </span>
                <div className="h-10">

                </div>
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

var daysInMonth = function(y, m) {
    return new Date(y, m, 0).getDate()
}