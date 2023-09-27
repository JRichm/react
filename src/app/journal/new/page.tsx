import '@/styles/styles.css'
import Link from "next/link"

export default function NewJournalEntry() {
    
    const todaysDate = new Date()

    return (
        <>
            <div className="w-full flex flex-col align-center">
                <div className='flex justify-center'>
                    <div style={{backgroundColor: '#dddddd'}} className="w-1/2 h-36 flex flex-col justify-between p-3">
                        <span className='flex flex-row justify-between'> 
                            <p>{todaysDate.toLocaleDateString()}</p>
                        </span>
                        <span className='flex flex-row justify-between'> 
                            <Link href='/journal'>◀ journal</Link>
                            <input type='text' placeholder='Search..'></input>
                        </span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <form className='w-1/2 flex flex-col'>
                        <textarea placeholder='new journal' className='shadow-md m-4 rounded-md p-2'></textarea>
                        <span className='flex flex-row justify-end gap-1'>
                            <Link type='button' className='border border-black border-solid outline-none rounded px-2 py-1 hover:bg-black hover:text-white hover:cursor-pointer' href=".">Canel</Link>
                            <input type='button' value="add" className='border border-black border-solid outline-none rounded px-2 py-1 hover:bg-black hover:text-white hover:cursor-pointer'></input>
                        </span>
                    </form>
                </div>
            </div>
        </> 
    )
}