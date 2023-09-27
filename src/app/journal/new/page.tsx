import '@/styles/styles.css'
import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"
import { create } from 'domain'


async function createJournalEntry(data: FormData) {
    "use server"

    const entryTitle = data.get("title")?.valueOf()
    const entryText = data.get("text")?.valueOf()
    const entryImageInput = data.get("image")?.valueOf()
    var entryImage

    if (typeof entryTitle !== "string" || entryTitle.length === 0) {
        throw new Error("Invalid Title")
    }

    if (typeof entryText !== "string" || entryText.length === 0) {
        throw new Error("Invalid Entry Data")
    }

    if (!entryImageInput) {
        entryImage = undefined
    }

    await prisma.journalEntry.create({ data: { entryTitle, entryText, entryImage } })

    redirect("/journal")
}

export default function NewJournalEntry() {

    const todaysDate = new Date()

    return (
        <>
            <div className="w-full flex flex-col align-center">
                <div className='flex justify-center'>
                    <div style={{backgroundColor: '#dddddd'}} className="w-1/2 h-36 flex flex-col justify-between p-3">
                        <span className='flex flex-row justify-between'> 
                            <p>{todaysDate.toLocaleDateString()}</p>
                            {/* <p>add something here</p> */}
                        </span>
                        <span className='flex flex-row justify-between'> 
                            <Link href='/journal'>◀ journal</Link>
                            {/* <p>and here</p> */}
                        </span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <form className='w-1/2 flex flex-col' action={createJournalEntry}>
                        <input type='text' name='title' placeholder='Entry Title' className='shadow-md m-2 rounded-md p-2 outline outline-1'></input>
                        <textarea name='text' placeholder='Entry Text' className='shadow-md m-2 rounded-md p-2 h-32 outline outline-1'></textarea>
                        <span className='flex flex-row justify-end gap-1'>
                            <Link type='button' className='border border-black border-solid outline-none rounded px-2 py-1 hover:bg-black hover:text-white hover:cursor-pointer' href=".">Canel</Link>
                            <input type='submit' value='add' className='border border-black border-solid outline-none rounded px-2 py-1 hover:bg-black hover:text-white hover:cursor-pointer'></input>
                        </span>
                    </form>
                </div>
            </div>
        </> 
    )
}