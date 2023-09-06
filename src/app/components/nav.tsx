import Link from "next/link"

export default function LeftNav() {
    return(
        <>
            <div className="flex flex-col">
                <h1 className="w-72 text-xl">this is the nav</h1>
                <ul className="flex flex-col">
                    <Link href="/todo">To Do</Link>
                    <Link href="/">Calendar</Link>
                </ul>
            </div>
        </>
    )
}
