export default function Day(props) {

    const date = props.date;

    // className for all days
    let className = "";
    
    // days for previous and next month

    console.log('Day:')
    console.log(props)

    if (date.getMonth() != props.viewMonth.getMonth()) {
        className += "text-gray-300";

    // todays date
    } else if (date.getDate() == props.currentDate.getDate() && date.getMonth() == props.currentDate.getMonth()) {
        className += "bg-blue-500 w-6 text-center rounded-full text-white";

    // any other day
    } else {
        className += "";
    }

    return (
        <>
            <div className="hover:outline hover:outline-1 hover:outline-gray-200 m-1 p-1">
                <span>
                    <p className={className}>{props.date.getDate()}</p>
                </span>
                <div className="h-10">

                </div>
            </div>
        </>
    )
}