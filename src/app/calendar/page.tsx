import LeftNav from '@/components/nav'
import Calendar from './components/calendar'

export default function CalendarPage() {
    return (
        <>
            <div className='flex flex-row'>   
                <div className='w-fit'>
                    <LeftNav />
                </div>
                <div>
                    <Calendar />
                </div>
            </div>
        </>
    )
}