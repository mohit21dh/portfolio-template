import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaGithubAlt, FaLinkedin, FaHome, FaInstagram, FaPhone, FaVoicemail, FaLocationArrow, FaCalendar } from 'react-icons/fa'
import BrandLogo from './components/Logos/Brand'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='app-content'>
      <div className='logo'>
        <BrandLogo />
      </div>
      <div className='grid gap-12 grid-cols-3'>
        <div className='col-span-1 mt-48 bg-white rounded-xl min-h-[50vh] pb-4 px-12'>
          <div className='relative flex flex-col gap-2 items-center justify-center '>
            <img loading='lazy' className='rounded-xl w-64 h-64 absolute -top-32 shadow-lg' src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" alt="profile-photo-mohit" />
            <div className='font-bold mt-40 text-3xl'>
              Mohit Yadav
            </div>
            <div className='font-thin'>
              Full Stack Engineer
            </div>
            <div className='flex items-center justify-start gap-2'>
              <FaLinkedin className='rounded-md w-8 h-8 cursor-pointer fill-[#0072b1]' />
              <FaGithubAlt className='rounded-md w-8 h-8 cursor-pointer fill-black' />
              <FaInstagram className='rounded-md w-8 h-8 cursor-pointer' />
            </div>
          </div>
          <div className='flex flex-col gap-2 rounded-xl p-4 mt-8 bg-[#F3F6F6]'>
            <div className='grid p-2 grid-cols-6 grid-rows-2'>
              <div className='col-span-1 col-start-1 row-start-1 row-span-2 place-self-center'>
                <FaPhone />
              </div>
              <div className='col-span-5 font-thin row-span-1 row-start-1'>
                Phone
              </div>
              <div className='col-span-5 row-span-1 row-start-2'>
                +4915218139014
              </div>
            </div>
            <div className='grid p-2 border-t-2  grid-cols-6 grid-rows-2'>
              <div className='col-span-1 col-start-1 row-start-1 row-span-2 place-self-center'>
                <FaVoicemail />
              </div>
              <div className='col-span-5 font-thin row-span-1 row-start-1'>
                Email
              </div>
              <div className='col-span-5 row-span-1 row-start-2'>
                mohit.developer21@gmail.com
              </div>
            </div>
            <div className='grid p-2 border-t-2  grid-cols-6 grid-rows-2'>
              <div className='col-span-1 col-start-1 row-start-1 row-span-2 place-self-center'>
                <FaLocationArrow />
              </div>
              <div className='col-span-5 font-thin  row-span-1 row-start-1'>
                Location
              </div>
              <div className='col-span-5 row-span-1 row-start-2'>
                Berlin, Germany
              </div>
            </div>
            <div className='grid p-2 border-t-2  grid-cols-6 grid-rows-2'>
              <div className='col-span-1 col-start-1 row-start-1 row-span-2 place-self-center'>
                <FaCalendar />
              </div>
              <div className='col-span-5 font-thin  row-span-1 row-start-1'>
                Birthday
              </div>
              <div className="col-span-5 row-span-1 row-start-2">
                October 15, 1990
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='font-bold mt-8 w-64 rounded-[100px] h-16 p-4 text-white bg-gradient-to-r from-emerald-300 via-teal-300 to-green-400'>
              Download CV
            </button>
          </div>


        </div>
        <div className='col-span-2 mt-24 flex flex-col gap-4'>
          <div className='bg-white h-28 self-end flex gap-6 rounded-2xl p-4'>
            <div className='flex rounded-md gap-1 bg-gray-200 py-6 px-4 flex-col justify-center items-center'>
              <div>
                <FaHome />
              </div>
              <div>
                About
              </div>
            </div>
            <div className='flex rounded-md flex-col gap-1 bg-gray-200 justify-center py-6 px-4 items-center'>
              <div>
                <FaHome />
              </div>
              <div>
                Resume
              </div>
            </div>
            <div className='flex rounded-md flex-col gap-1 bg-gray-200 justify-center py-6 px-4 items-center'>
              <div>
                <FaHome />
              </div>
              <div>
                Works
              </div>
            </div>
            <div className='flex rounded-md flex-col gap-1 bg-gray-200 justify-center py-6 px-4 items-center'>
              <div>
                <FaHome />
              </div>
              <div>
                Blogs
              </div>
            </div>
            <div className='flex rounded-md flex-col gap-1 bg-gray-200 justify-center py-6 px-4 items-center'>
              <div>
                <FaHome />
              </div>
              <div>
                Contact
              </div>
            </div>
          </div>
          <div className='flex mt-12 gap-6 bg-white flex-col rounded-lg px-6 py-12'>
            <h1 className='flex gap-2 items-center font-bold text-4xl'>
              About Me
              <hr className="w-64 h-1 bg-gradient-to-r from-rose-900 via-rose-800 to-pink-700 border-0 rounded" />
            </h1>
            <p className='flex gap-2 flex-col font-thin text-md'>
              <text>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</text>
              <text>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</text>
             
            </p>

            <h1 className='flex gap-2 mt-10 items-center font-bold text-4xl'>
              What I do!
              
            </h1>
            
          </div>

        </div>
      </div>
    </main>
  )
}
