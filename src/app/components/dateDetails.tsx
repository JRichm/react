export default function DateDetails({selectedDate}) {
    return (
        <>
            <div className="m-5 p-2 w-full">
                <h1 className="text-xl p-3">{ selectedDate.toLocaleString('default', { month: 'long', day: "numeric" }) }, { selectedDate.getFullYear() }</h1>
                <hr className="w-full"></hr>
                <ul className="marker:text-black list-disc p-5 space-y-3">
                    {/* { noteElements } */}
                </ul>
                <hr />
            </div>
        </>
    )
}