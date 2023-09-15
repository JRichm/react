import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createToDo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title")
    }

    await prisma.todo.create({ data: { title, complete:
    false } })

    redirect("/todo")
}

export default function New() {
    return (
        <>  
            <div className="m-5 w-1/3">
                <div className="flex flex-col justify-center m-5 w-2/5">
                    <header className="flex justify-between items-center mb-4 w-20">
                        <h1 className="text-2xl">New</h1>
                    </header>
                    <form action={createToDo} className="flex gap-2 flex-col w-1/8">
                        <input type="text" name="title" className="border border-black border-solid rounded px-2 py-1 outline-none w-1/8"></input>
                        <div className="flex gap-1 justify-end">
                            <Link className="border border-black border-solid outline-none rounded px-2 py-1 hover:bg-black hover:text-white" href="..">Cancel</Link>
                            <button type="submit" className="border border-black border-solid outline-none rounded px-2 py-1 hover:bg-black hover:text-white">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}