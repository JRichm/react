import Link from "next/link"
import LeftNav from '@/components/nav'
import { prisma } from "@/db"
import { ToDoItem } from "@/components/toDoItem";

function getTodos() {
    return  prisma.todo.findMany()
}

async function toggleToDo(id: string, complete: boolean) {
    "use server"

    await prisma.todo.update({ where: { id }, data: { complete } })

    console.log(id, complete)
}

export default async function ToDo() {
    const todos = await getTodos();
    return (
      <>
        <div className="flex flex-row align-center justify-center">
          <LeftNav />
          <div className="flex flex-col w-full m-3 p-3">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Todos</h1>
                <Link href="/new" className="border border-solid border-black px-2 py-1 rounded">New</Link>
            </header>
            <ul className="pl-4">
                {todos.map(todo => (
                    <ToDoItem key={todo.id} {...todo} toggleToDo={toggleToDo} />
                ))}
            </ul>
          </div>
        </div>
      </>
    )
}