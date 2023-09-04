import MainHeader from '@/components/header'
import LeftNav from '@/components/nav'
import Calendar from '@/components/calendar'

import '@/styles/styles.css'

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <div className="flex flex-row">
        <LeftNav />
        <Calendar />
      </div>
    </>
  )
}