import LeftNav from '@/components/nav'
import CalendarComponent from '@/components/calendar'
import DayDetails from '@/components/dayDetails'
import NewNote from '@/components/newNote'

import '@/styles/styles.css'

const currentDate = new Date()
export default function HomePage() {
  return (
    <>
      <div className="flex flex-row align-center">
        <LeftNav />
        <div className="flex flex-col">
          <CalendarComponent />
          <DayDetails />
        </div>
        <NewNote />
      </div>
    </>
  )
}