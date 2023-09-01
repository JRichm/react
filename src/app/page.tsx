import Button from '@/components/button';
import Day from '@/components/calendar';
import '@/styles/styles.css'

export default function HomePage() {
  return (
    <>
      <h1 className='text-green-500'>Hello World</h1>
      <Button />
      <Day />
    </>
  )
}