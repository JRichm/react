import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createToDo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title .length === 0) {
        throw new Error("Invalid Title")
    }

    await prisma.todo.create({ data: { title, complete:
    false } })

    redirect("/todo")
}

export default function New() {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createToDo} className="flex gap-2 flex-col">
                <input type="text" name="title" className="border border-black border-solid rounded px-2 py-1 outline-none"></input>
                <div className="flex gap-1 justify-end">
                    <Link className="border border-black border-solid outline-none rounded px-2 py-1 hover:bg-black hover:text-white" href="..">Cancel</Link>
                    <button type="submit" className="border border-black border-solid outline-none rounded px-2 py-1 hover:bg-black hover:text-white">Create</button>
                </div>
            </form>
        </>
    )
}