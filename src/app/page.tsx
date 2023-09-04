import Button from '@/components/button';
import Calendar from '@/components/calendar';
import DateDetails from '@/components/calendar';
import '@/styles/styles.css'

export default function HomePage() {
  return (
    <>
      <h1 className='text-green-500'>Hello World</h1>
      <Button />
      <div className='flex flex-row'>
        <Calendar />
      </div>
    </>
  )
}