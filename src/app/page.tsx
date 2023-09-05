import MainHeader from '@/components/header'
import LeftNav from '@/components/nav'
import CalendarComponent from '@/components/calendar'
import DayDetails from '@/components/dayDetails'
import NewNote from '@/components/newNote'

import '@/styles/styles.css'

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <div className="flex flex-row">
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