import LeftNav from '@/components/nav'
import Calendar from './components/calendar'
import { prisma } from "@/db"


export default async function CalendarPage() {    

    const currentDate = new Date()

    return (
        <>
            <div className='flex flex-row'>   
                <div className='w-fit'>
                    <LeftNav />
                </div>
                <div>
                    <Calendar viewDate={currentDate} />
                </div>
            </div>
        </>
    )
}