import React, { useState } from 'react';
import { prisma } from "@/db"

import Day from '@/components/day'
import { get_notes_for_date } from 'crud';

let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

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

export default function CalendarComponent({selectedDate, setSelectedDate}) {
    const [viewMonth, setViewMonth] = useState(new Date());

    return (
        <>
            <div className="outline outline-1 p-2 m-5 rounded">
                <CalendarHeader viewMonth={ viewMonth } setViewMonth={setViewMonth} />
                <hr className="mb-2" />
                <Calendar viewMonth={ viewMonth } setSelectedDate={setSelectedDate} />
            </div>
        </>
    )
}

function CalendarHeader({ viewMonth, setViewMonth }) {
    return (
        <>
            <span className="flex flex-row justify-between text-xl">
                <span>
                    <h1 className="p-3">{ viewMonth.toLocaleString('default', {month: 'long'}) }</h1>
                </span>
                <span className="flex flex-row align-center">
                    <div className="m-2 flex flex-row align-center">
                        <select name="month" placeholder={viewMonth.getMonth()} onInput={(e) => {setViewMonth(new Date(viewMonth.setMonth(e.target.value - 1)))}}>
                            {selectMonths}
                        </select>
                        <select name="year" placeholder={viewMonth.getMonth()} onInput={(e) => {setViewMonth(new Date(viewMonth.setYear(e.target.value)))}}>
                            {selectYears}
                        </select>
                    </div>
                    <div className="m-2 flex flex-row align-center">
                        <button className="m-1" onClick={(e) => {setViewMonth(new Date(viewMonth.setMonth(viewMonth.getMonth() - 1)))}}>&laquo;</button>
                        <button className="m-1" onClick={(e) => {setViewMonth(new Date(viewMonth.setMonth(viewMonth.getMonth() + 1)))}}>&raquo;</button>
                    </div>
                </span>
            </span>
        </>
    )
}

export async function Calendar({viewMonth, setSelectedDate}) {

    const dayComponents = [];
    let day;
    const calDate = new Date(viewMonth.getFullYear(), viewMonth.getMonth())
    calDate.setDate(calDate.getDate() - calDate.getDay() - 1)

    for (let d = 0; d < 42; d++) {
        calDate.setDate(calDate.getDate() + 1)

        day = <Day date={new Date(calDate)} viewMonth={viewMonth} currentDate={currentDate} setSelectedDate={setSelectedDate}/>
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