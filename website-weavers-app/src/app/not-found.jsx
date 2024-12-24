import Link from 'next/link'
import '../index.css'

export default function NotFound() {
    return (
      <div className='h-screen flex flex-col justify-center items-center gap-4'>
        <h2 className='text-4xl'>Not Found</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bird"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/></svg>
        <p>Could not find requested resource</p>
        <Link href="/" className='p-4 rounded-md border border-solid border-blue-600 font-bold'>Return Home</Link>
      </div>
    )
  }