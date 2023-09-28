import Link from "next/link"

export default function LeftNav() {
    return(
        <>
            <div className="flex flex-col m-12 w-60">
                <hr></hr>
                <Link href="/todo">To Do</Link>
                <hr></hr>
                <Link href="/">Calendar</Link>
                <hr></hr>
                <Link href="/calendar">New Calendar</Link>
                <hr></hr>
                <Link href='/recipes'>Recipes</Link>
                <hr></hr>
                <Link href='/grocery'>Grocery List</Link>
                <hr></hr>
                <Link href='/journal'>Journal</Link>
                <hr></hr>
            </div>
        </>
    )
}
