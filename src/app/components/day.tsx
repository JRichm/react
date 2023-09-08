export default function Day({date, viewMonth, currentDate, setSelectedDate}) {

    // className for all days
    let className = "";
    
    // days for previous and next month

    if (date.getMonth() != viewMonth.getMonth()) {
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
            <div className="hover:outline hover:outline-1 hover:outline-gray-200 m-1 p-1" onClick={setSelectedDate(date)}>
                <span>
                    <p className={className}>{date.getDate()}</p>
                </span>
                <div className="h-10">

                </div>
            </div>
        </>
    )
}