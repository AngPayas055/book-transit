import Image from 'next/image'
import demo from '@/app/media/gif/demo.gif'

export default function Home () {
  return (
    <div className="max-w-6xl mx-auto p-3">
      <div className='max-w-5xl rounded-xl mx-auto shadow-indigo-200 p-2 shadow-lg border-t-2'>
        <Image
          src={demo}
          width={1100}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}