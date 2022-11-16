
import  {HiXMark} from  'react-icons/hi2';
import {IoAppsSharp}  from 'react-icons/io5';
import {FaFacebookF}  from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import  {FaLinkedinIn, FaSun}  from  'react-icons/fa';
import  {IoLogoOctocat} from  'react-icons/io';
import {BsFillBookmarksFill, BsFillCheckSquareFill, BsFillFileTextFill, BsFillTelephoneForwardFill} from 'react-icons/bs'
import {BsNutFill} from 'react-icons/bs'
import  {NavLink} from 'react-router-dom'
import {useState} from 'react'
import { Usedarkmode } from '../hook/Usedarkmode';

const About = () => {

    const navlinkstyle = ({ isActive }) => {

        return{
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'red' : 'normal'
        }
        
       }

    Usedarkmode()
    const [colortheme, setTheme] = Usedarkmode();

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);

    return(
        
        <section >
          <div className='  '>
            <nav className=' bg-white h-20  w-screen z-10  top-0 fixed drop-shadow-lg dark:bg-[#151D3B]'>
               
            <div className=' max-w-[1240px] mx-auto '>
                    <div className=' flex  justify-between '>
                        <div className=' lg:ml-0 sm:ml-6'>
                        <NavLink to="/Navbar">
                            <svg className=' fill-black dark:fill-white ' width="60" height="91" viewBox="0 0 60 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7734 44.5625C26.8672 44.5625 29.7188 43.5547 32.3281 41.5391L33.6641 42.8281C31.8359 45.0469 29.2969 46.5156 26.0469 47.2344C25.0156 47.4531 23.9844 47.5625 22.9531 47.5625C18.9062 47.5625 15.6875 46.0625 13.2969 43.0625C11.0938 40.2656 9.99219 36.8281 9.99219 32.75C9.99219 28.5156 11.1094 25.0156 13.3438 22.25C15.75 19.2969 18.9844 17.8203 23.0469 17.8203C25.0469 17.8203 26.9766 18.2188 28.8359 19.0156C29.1172 19.1406 29.3203 19.2109 29.4453 19.2266C30.4609 18.9609 31.0625 18.3281 31.25 17.3281H33.1016V27.3594H31.1562C30.3125 22.6562 27.7266 20.3047 23.3984 20.3047C20.6172 20.3047 18.5312 21.5938 17.1406 24.1719C15.9375 26.3594 15.3359 29.2344 15.3359 32.7969C15.3359 38.9062 17.1875 42.6719 20.8906 44.0938C21.7188 44.4062 22.6797 44.5625 23.7734 44.5625Z" />
                                <path d="M30.0938 33.0234C30.1719 32.0859 30.2109 31.3438 30.2109 30.7969C30.2109 29.625 30.0859 28.6328 29.8359 27.8203C29.6016 26.9922 29.1797 26.3047 28.5703 25.7578C27.9609 25.1953 27.25 24.7266 26.4375 24.3516C24.75 23.5859 23.0156 23.2031 21.2344 23.2031C19.4688 23.2031 17.9688 23.4297 16.7344 23.8828C15.5 24.3203 14.4141 24.9219 13.4766 25.6875C12.5547 26.4531 11.7656 27.3594 11.1094 28.4062C10.4531 29.4531 9.92188 30.5781 9.51562 31.7812C8.71875 34.0781 8.32031 36.6406 8.32031 39.4688C8.32031 43.3438 9.36719 46.6875 11.4609 49.5C12.9453 51.4688 14.9609 52.8594 17.5078 53.6719C18.8047 54.0938 20.1484 54.3047 21.5391 54.3047C22.9297 54.3047 24.125 54.2266 25.125 54.0703C26.125 53.8984 27.0625 53.6406 27.9375 53.2969C29.6875 52.6406 31.2969 51.5938 32.7656 50.1562L33.9375 51.7266C32.7344 53.5234 31.0312 54.9531 28.8281 56.0156C26.6406 57.0625 24 57.5859 20.9062 57.5859C15.1875 57.5859 10.6719 55.7344 7.35938 52.0312C4.32812 48.6094 2.8125 44.3672 2.8125 39.3047C2.8125 36.1328 3.5 33.1406 4.875 30.3281C7.09375 25.8125 10.6406 22.8281 15.5156 21.375C17.1875 20.8906 18.7109 20.6484 20.0859 20.6484C21.4609 20.6484 22.4609 20.6875 23.0859 20.7656C23.7109 20.8281 24.2812 20.9219 24.7969 21.0469C25.3125 21.1562 25.7812 21.2812 26.2031 21.4219L27.3984 21.8203C28.7578 22.2891 29.8281 22.5234 30.6094 22.5234C31.3906 22.5234 32.2578 21.8828 33.2109 20.6016H35.4375L32.3438 33.0234H30.0938Z" />
                            </svg>
                        </NavLink>
                        </div>
                        <ul className=' flex'>
                            <div className='hidden lg:flex py-6 gap-[53px] dark:text-[#FAF9F8]'>
                                <li className='  text-lg cursor-pointer hover:text-[#B10808] '><NavLink  to='/Navbar'>Home</NavLink></li>
                                <li className=' text-lg cursor-pointer hover:text-[#B10808]'><NavLink style={navlinkstyle} to='/About'>About</NavLink></li>
                                <li className=' text-lg cursor-pointer hover:text-[#B10808]'><NavLink to='/Project'>Project</NavLink></li>
                                <li className=' text-lg cursor-pointer hover:text-[#B10808]'>Resume</li>
                                <li className=' text-lg cursor-pointer hover:text-[#B10808]'>Contact</li>
                            </div>

                            <div className='dark:text-[#FAF9F8] flex lg:py-7 lg:ml-16 sm:py-[29px] sm:ml-[140px] md:ml-[600px]  ' onClick={() => setTheme(colortheme)}>
                                { colortheme === 'dark' ? (
                                    <svg className=' fill-black w-7 h-6' width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.784 30.059C21.9609 30.059 26.6891 27.9499 29.8216 24.4938C30.285 23.9826 29.7797 23.2357 29.0635 23.3578C20.9205 24.7465 13.4425 19.1557 13.4425 11.7949C13.4425 7.55478 15.9773 3.65575 20.0969 1.55637C20.732 1.23277 20.5723 0.370629 19.8507 0.251274C18.8391 0.0842433 17.8126 0.000137164 16.784 0C7.51943 0 0 6.72282 0 15.0295C0 23.3256 7.50763 30.059 16.784 30.059Z" fill=""/>
                                    </svg>
                                ):(
                                    <FaSun className=" w-7 h-6" />
                                )}
                             </div>
                            
                        </ul>

                        <div  className=' lg:hidden sm:py-6 sm:mr-9  ' onClick={handleClick}>
                              { !nav ? <IoAppsSharp className=' lg:w-7 lg:h-6  sm:w-5 sm:h-6 mt-1 dark:text-[#FAF9F8]'/> : <HiXMark className=' w-7 h-6 mt-1 dark:text-[#FAF9F8]'/>  }
                        </div>
                   </div>
                   <ul className={!nav ? 'hidden' :  ' border-t-2 absolute  right-4 top-20  pt-4 pl-5 bg-white h-[200px] w-40  gap-[53px] dark:bg-[#17234f] shadow-xl dark:text-[#FAF9F8] '}>
                            <li className=' flex gap-3'><IoAppsSharp className=' mt-1 ' /><NavLink to='/Navbar'>Home</NavLink></li>
                            <li className=' flex gap-3 pt-2'><BsFillFileTextFill className=' mt-1' />About</li>
                            <li className=' flex gap-3 pt-2'><BsFillCheckSquareFill className=' mt-1' /><NavLink to='/Project'>Project</NavLink></li>
                            <li className=' flex gap-3 pt-2'><BsFillBookmarksFill className=' mt-1' />Resume</li>
                            <li className=' flex gap-3 pt-2'><BsFillTelephoneForwardFill className=' mt-1' />Contact</li>
                  </ul>
                </div>
            </nav>
            <main className=" dark:bg-[#151D3B] ">
                <div className='  flex '>
                    <div className=' mt-20'>
                        <svg  className=' lg:w-[50px] lg:h-[200px] sm:w-[30px] sm:h-[120px]' width="" height="" viewBox="0 0 96 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-5.04033 203.387C8.08376 202.926 20.9885 199.885 32.9372 194.437C44.8858 188.988 55.6444 181.24 64.5985 171.634C73.5527 162.028 80.527 150.752 85.1235 138.45C89.7199 126.149 91.8484 113.062 91.3874 99.9383C90.9263 86.8143 87.8848 73.9095 82.4365 61.9608C76.9882 50.0122 69.2398 39.2537 59.6337 30.2995C50.0276 21.3454 38.7518 14.371 26.4503 9.77454C14.1488 5.1781 1.06244 3.04963 -12.0617 3.51066L-10.7977 39.4907C-2.39861 39.1956 5.97639 40.5578 13.8491 43.4994C21.7218 46.441 28.938 50.9045 35.0857 56.635C41.2334 62.3654 46.1922 69.2506 49.679 76.8975C53.1658 84.5444 55.1123 92.8031 55.4073 101.202C55.7024 109.601 54.3402 117.976 51.3986 125.849C48.457 133.722 43.9935 140.938 38.2631 147.086C32.5326 153.233 25.6474 158.192 18.0005 161.679C10.3537 165.166 2.09489 167.112 -6.30424 167.407L-5.04033 203.387Z" fill="#FF6B6B" fill-opacity="0.9"/>
                            <path d="M-2.91184 389.212C9.97975 389.207 22.744 386.662 34.6521 381.723C46.5601 376.784 57.3789 369.549 66.4906 360.429C75.6022 351.309 82.8284 340.484 87.7565 328.571C92.6846 316.659 95.2181 303.892 95.2124 291.001C95.2066 278.109 92.6618 265.345 87.7231 253.437C82.7844 241.529 75.5486 230.71 66.4288 221.598C57.309 212.487 46.4838 205.261 34.5714 200.332C22.6589 195.404 9.8924 192.871 -2.99919 192.877L-2.98347 228.219C5.26686 228.216 13.4371 229.837 21.0609 232.991C28.6846 236.145 35.6124 240.769 41.4489 246.601C47.2854 252.432 51.9161 259.356 55.0768 266.976C58.2374 274.597 59.8661 282.766 59.8698 291.016C59.8734 299.267 58.252 307.437 55.0982 315.061C51.9443 322.685 47.3197 329.612 41.4884 335.449C35.6572 341.285 28.7334 345.916 21.1125 349.077C13.4916 352.237 5.32277 353.866 -2.92756 353.87L-2.91184 389.212Z" fill="#FF6B6B" fill-opacity="0.9"/>
                        </svg>
                    </div>
                    <div className=' lg:mt-40 lg:ml-44 sm:ml-8 sm:mt-32'>
                       
                    </div>
                </div>

                <div className=' text-center relative bottom-20  '>
                    <h3 className=" lg:mt-16 lg:text-4xl dark:text-[#FAF9F8]  font-Metamorphous sm:text-3xl sm:mt-20  ">Hello world,</h3>
                    <h1 className=" lg:text-5xl pt-10 dark:text-[#FAF9F8] font-Metamorphous sm:text-3xl ">My Journey in Tech Community </h1>
                    <p className=" lg:text-xl pt-3 dark:text-[#FAF9F8] font-Metamorphous sm:text-sm  " >If you are here I strong believe we will be working <br /> closely or together as team soon. <br /> Keep scrolling let me talk you through my journey so far.</p>
                </div>
               
               
            </main>

            
            <div className=' flex justify-end'>
                <div className='  absolute  bottom-0' >
                    <svg className=' lg:w-[50px] lg:h-[200px] sm:w-[30px] sm:h-[120px]' width="" height="" viewBox="0 0 99 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.94 188.464C87.8155 188.918 74.9093 191.954 62.958 197.397C51.0068 202.839 40.2446 210.583 31.286 220.184C22.3273 229.786 15.3476 241.059 10.7454 253.358C6.14313 265.657 4.00849 278.743 4.46333 291.867C4.91817 304.991 7.95358 317.898 13.3963 329.849C18.8389 341.8 26.5823 352.562 36.1842 361.521C45.7861 370.48 57.0585 377.459 69.3579 382.062C81.6572 386.664 94.7426 388.798 107.867 388.344L106.62 352.363C98.2207 352.654 89.8463 351.288 81.975 348.343C74.1037 345.397 66.8896 340.93 60.7446 335.197C54.5996 329.464 49.644 322.576 46.1608 314.928C42.6776 307.279 40.735 299.019 40.4439 290.62C40.1529 282.221 41.519 273.847 44.4643 265.975C47.4096 258.104 51.8765 250.89 57.6098 244.745C63.3432 238.6 70.2307 233.644 77.8793 230.161C85.5278 226.678 93.7875 224.735 102.187 224.444L100.94 188.464Z" fill="#FF6B6B" fill-opacity="0.9"/>
                        <path d="M99.1731 1.00268C86.2815 1.00234 73.5161 3.54118 61.6057 8.47426C49.6953 13.4074 38.8731 20.6381 29.7571 29.7536C20.6412 38.8691 13.4099 49.6908 8.47618 61.601C3.54247 73.5111 1.00294 86.2764 1.0026 99.168C1.00226 112.06 3.54111 124.825 8.47419 136.735C13.4073 148.646 20.638 159.468 29.7535 168.584C38.869 177.7 49.6907 184.931 61.6009 189.865C73.511 194.799 86.2763 197.338 99.1679 197.338L99.1688 161.996C90.9185 161.996 82.749 160.37 75.1268 157.213C67.5045 154.055 60.5789 149.428 54.7451 143.594C48.9114 137.76 44.2839 130.834 41.1269 123.211C37.9698 115.589 36.345 107.419 36.3452 99.1689C36.3454 90.9186 37.9707 82.7491 41.1281 75.1268C44.2856 67.5046 48.9135 60.5789 54.7475 54.7452C60.5815 48.9115 67.5074 44.284 75.1298 41.1269C82.7522 37.9699 90.9218 36.3451 99.1722 36.3453L99.1731 1.00268Z" fill="#FF6B6B" fill-opacity="0.9"/>
                    </svg>
                </div>
            </div>
             

           <div className=' dark:bg-[#151D3B]'>
            <div className=' max-w-[1240px] mx-auto'>
                <div>
                   <h1 className=' lg:text-5xl dark:text-white lg:pl-0  font-Metamorphous lg:pt-52 sm:pt-32 sm:pl-7 sm:text-3xl'>About Me</h1>
                </div>
                <div className=' bg-white lg:mx-0 pb-7 h-[100%] dark:bg-[#17234f] dark:text-white  sm:mx-7 lg:mt-16 sm:mt-6 '>
                    <div>
                        <div>
                            <h2 className=' lg:pl-20 text-2xl pt-10  font-Poppins sm:pl-7  font-bold'>Hello World</h2>
                            <p className=' lg:pl-20 pt-5 font-Poppins sm:px-7'>I am Christian Chibuzor a frontend engineer specialized in Javascript based in Imo State, Nigeria also a Chelsea Fan. I <br /> have been in the tech community 1+ year in production working with javascript library such as <br /> <span className='text-[#FF6B6B]'> ReactJS.</span></p>
                            <h2 className=' lg:pl-20 pt-5 font-Poppins text-xl font-bold sm:px-7 '>Stacks that I am familiar with:</h2>
                            <p className=' lg:pl-20 pt-5 font-Poppins flex gap-2 sm:px-7 '><BsNutFill className=' mt-1 text-red-600'/>JavaScript (ES6)</p>
                            <p className=' lg:pl-20 pt-3 font-Poppins flex gap-2  sm:px-7'><BsNutFill className=' mt-1 text-red-600'/>ReactJs</p>
                            <p className=' lg:pl-20 pt-3 font-Poppins flex gap-2 sm:px-7'><BsNutFill className=' mt-1 text-red-600'/>CSS3</p>
                            <p className=' lg:pl-20 pt-3 font-Poppins flex gap-2 sm:px-7'><BsNutFill className=' mt-1 text-red-600'/>TailwindCSS</p>
                        </div>
                        <div>
                           <h2 className=' lg:pl-20 pt-5 font-Poppins text-xl font-bold  sm:px-7'>Version Control & Deployment that I am familiar with:</h2>
                           <p className=' lg:pl-20 pt-3 font-Poppins flex gap-2  sm:px-7'><BsNutFill className=' mt-1 text-red-600'/>Git</p>
                           <p className=' lg:pl-20 pt-3 font-Poppins flex gap-2  sm:px-7'><BsNutFill className=' mt-1 text-red-600'/>Github</p>
                           <p className=' lg:pl-20 pt-3 font-Poppins flex gap-2 sm:px-7 '><BsNutFill className=' mt-1 text-red-600'/>Netlify</p>
                        </div>

                        <div>
                           <h2 className=' lg:pl-20 pt-5 font-Poppins text-xl font-bold  sm:px-7'>My Hobbies:</h2>
                           <p className=' lg:pl-20 pt-3 font-Poppins flex gap-2  sm:px-7'><BsNutFill className=' mt-1 text-red-600'/>Cooking</p>
                           <p className=' lg:pl-20 pt-3 font-Poppins flex gap-2  sm:px-7'><BsNutFill className=' mt-1 text-red-600'/>Football</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className=' bg-white mt-20  dark:bg-[#151D3B]'>
                    <div className=' max-w-[1240px] mx-auto'>
                        <div className=' flex lg:ml-0  sm:ml-7  '>
                            <div className=' pt-14'>
                                <svg className=' fill-black dark:fill-white ' width="60" height="91" viewBox="0 0 60 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.7734 44.5625C26.8672 44.5625 29.7188 43.5547 32.3281 41.5391L33.6641 42.8281C31.8359 45.0469 29.2969 46.5156 26.0469 47.2344C25.0156 47.4531 23.9844 47.5625 22.9531 47.5625C18.9062 47.5625 15.6875 46.0625 13.2969 43.0625C11.0938 40.2656 9.99219 36.8281 9.99219 32.75C9.99219 28.5156 11.1094 25.0156 13.3438 22.25C15.75 19.2969 18.9844 17.8203 23.0469 17.8203C25.0469 17.8203 26.9766 18.2188 28.8359 19.0156C29.1172 19.1406 29.3203 19.2109 29.4453 19.2266C30.4609 18.9609 31.0625 18.3281 31.25 17.3281H33.1016V27.3594H31.1562C30.3125 22.6562 27.7266 20.3047 23.3984 20.3047C20.6172 20.3047 18.5312 21.5938 17.1406 24.1719C15.9375 26.3594 15.3359 29.2344 15.3359 32.7969C15.3359 38.9062 17.1875 42.6719 20.8906 44.0938C21.7188 44.4062 22.6797 44.5625 23.7734 44.5625Z" />
                                    <path d="M30.0938 33.0234C30.1719 32.0859 30.2109 31.3438 30.2109 30.7969C30.2109 29.625 30.0859 28.6328 29.8359 27.8203C29.6016 26.9922 29.1797 26.3047 28.5703 25.7578C27.9609 25.1953 27.25 24.7266 26.4375 24.3516C24.75 23.5859 23.0156 23.2031 21.2344 23.2031C19.4688 23.2031 17.9688 23.4297 16.7344 23.8828C15.5 24.3203 14.4141 24.9219 13.4766 25.6875C12.5547 26.4531 11.7656 27.3594 11.1094 28.4062C10.4531 29.4531 9.92188 30.5781 9.51562 31.7812C8.71875 34.0781 8.32031 36.6406 8.32031 39.4688C8.32031 43.3438 9.36719 46.6875 11.4609 49.5C12.9453 51.4688 14.9609 52.8594 17.5078 53.6719C18.8047 54.0938 20.1484 54.3047 21.5391 54.3047C22.9297 54.3047 24.125 54.2266 25.125 54.0703C26.125 53.8984 27.0625 53.6406 27.9375 53.2969C29.6875 52.6406 31.2969 51.5938 32.7656 50.1562L33.9375 51.7266C32.7344 53.5234 31.0312 54.9531 28.8281 56.0156C26.6406 57.0625 24 57.5859 20.9062 57.5859C15.1875 57.5859 10.6719 55.7344 7.35938 52.0312C4.32812 48.6094 2.8125 44.3672 2.8125 39.3047C2.8125 36.1328 3.5 33.1406 4.875 30.3281C7.09375 25.8125 10.6406 22.8281 15.5156 21.375C17.1875 20.8906 18.7109 20.6484 20.0859 20.6484C21.4609 20.6484 22.4609 20.6875 23.0859 20.7656C23.7109 20.8281 24.2812 20.9219 24.7969 21.0469C25.3125 21.1562 25.7812 21.2812 26.2031 21.4219L27.3984 21.8203C28.7578 22.2891 29.8281 22.5234 30.6094 22.5234C31.3906 22.5234 32.2578 21.8828 33.2109 20.6016H35.4375L32.3438 33.0234H30.0938Z" />
                                </svg>
                            </div>
                            <div className=' pt-[74px] text-xl dark:text-white'>
                                <h3 className=' lg:text-lg font-bold font-Metamorphous sm:text-sm'>Christian Chibuzor</h3>
                            </div>
                        </div>

                        <div className='  flex  -mt-3 lg:ml-0  sm:ml-7 '>
                         <div className=''>
                            <svg className=' w-6 h-5 fill-black dark:fill-white ' width="" height="" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2866 17.6656L18.8179 15.3218C18.5843 15.2223 18.3246 15.2013 18.078 15.262C17.8315 15.3228 17.6113 15.462 17.4507 15.6587L15.0288 18.6177C11.2279 16.8256 8.16904 13.7668 6.37695 9.96587L9.33594 7.54399C9.53305 7.38368 9.67256 7.16351 9.73335 6.91682C9.79414 6.67013 9.7729 6.41035 9.67285 6.1768L7.3291 0.708053C7.21929 0.4563 7.02508 0.250751 6.77996 0.126852C6.53483 0.00295173 6.25416 -0.0315334 5.98633 0.0293424L0.908203 1.20122C0.649985 1.26085 0.419602 1.40624 0.254656 1.61366C0.0897096 1.82109 -5.94829e-05 2.07829 2.95713e-08 2.34331C2.95713e-08 14.8677 10.1514 24.9996 22.6562 24.9996C22.9213 24.9997 23.1787 24.91 23.3862 24.7451C23.5937 24.5801 23.7392 24.3497 23.7988 24.0914L24.9707 19.0132C25.0312 18.7441 24.996 18.4623 24.8711 18.2163C24.7463 17.9704 24.5396 17.7756 24.2866 17.6656Z" />
                            </svg>
                         </div>
                          <div>
                            <p className=' lg:text-lg dark:text-white pl-7 text-sm  font-Metamorphous sm:text-sm '><a href="+234-90-63-499-930">+234-90-63-499-930</a></p>
                          </div>
                        </div>

                        <div className=' flex pt-4 lg:ml-0  sm:ml-7 '>
                            <div>
                                <svg className=' fill-black dark:fill-white  w-6 h-4' width="" height="" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5264 6.19141C24.7168 6.04004 25 6.18164 25 6.4209V16.4062C25 17.7002 23.9502 18.75 22.6562 18.75H2.34375C1.0498 18.75 0 17.7002 0 16.4062V6.42578C0 6.18164 0.27832 6.04492 0.473633 6.19629C1.56738 7.0459 3.01758 8.125 7.99805 11.7432C9.02832 12.4951 10.7666 14.0771 12.5 14.0674C14.2432 14.082 16.0156 12.4658 17.0068 11.7432C21.9873 8.125 23.4326 7.04102 24.5264 6.19141ZM12.5 12.5C13.6328 12.5195 15.2637 11.0742 16.084 10.4785C22.5635 5.77637 23.0566 5.36621 24.5508 4.19434C24.834 3.97461 25 3.63281 25 3.27148V2.34375C25 1.0498 23.9502 0 22.6562 0H2.34375C1.0498 0 0 1.0498 0 2.34375V3.27148C0 3.63281 0.166016 3.96973 0.449219 4.19434C1.94336 5.36133 2.43652 5.77637 8.91602 10.4785C9.73633 11.0742 11.3672 12.5195 12.5 12.5Z" />
                                </svg>
                            </div>

                            <div>
                                <h3 className='dark:text-white pl-7 lg:text-sm  sm:text-xs font-Metamorphous'><a href="chrisonwueyip@gmail.com">chrisonwueyip@gmail.com</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className=' max-w-[1240px] mx-auto'>
                        <div  className=' lg:flex lg:justify-end lg:gap-11  sm:gap-7 lg:ml-0 lg:mt-0  sm:flex sm:justify-start sm:mt-7  sm:ml-7'>
                            <div className="bg-bluelite  w-9 h-9 py-2 px-2 rounded-full dark:bg-[#FF6B6BE5] dark:text-white  ">
                              <FaFacebookF className=' w-5 h-5'/>
                            </div>

                            <div className=" bg-bluelite  w-9 h-9 py-2 px-2 rounded-full dark:bg-[#FF6B6BE5] dark:text-white  ">
                                <AiOutlineTwitter className=' w-5 h-5'/>
                            </div>

                            <div className=" bg-bluelite  w-9 h-9 py-2 px-2 rounded-full  dark:bg-[#FF6B6BE5] dark:text-white ">
                                <FaLinkedinIn className=' w-5 h-5'/>
                            </div>

                            <div className="  bg-bluelite  w-9 h-9 py-2 px-2 rounded-full dark:bg-[#FF6B6BE5] dark:text-white ">
                              <IoLogoOctocat className=' w-5 h-6'/>
                            </div>
                     </div>

                     <div className=' lg:flex lg:justify-end  lg:pt-0  sm:flex   sm:justify-start sm:px-7 sm:pt-5'>
                        <h3 className='  lg:text-sm py-12 dark:text-white  font-Metamorphous sm:text-xs'>Copyright © 2022 designed by Christian Chibuzor All rights reserved.</h3>
                    </div>
                    </div>

                   
                </footer>

           </div>

          
           </div>
        </section>
    )
}

export default About;     