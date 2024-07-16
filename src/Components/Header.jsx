import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import avatar from './../assets/Images/avatar.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';
function Header() {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINALS",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center  justify-between p-2'>
            <div className='flex gap-8 items-center'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
                <div className='hidden pt-4 md:flex  gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='pt-4 md:hidden flex gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}
                </div>
                <div className='md:hidden mr-3.5 pt-4' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical} />
                    {toggle ?
                        <div className='absolute mt-3 bg-blue-950 border-[1px] border-gray-500 p-3 rounded-md '>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem name={item.name} Icon={item.icon}  />
                            ))}
                        </div>
                        : null}
                </div>
            </div>
            <div className='mx-2 md:mx-4 pt-4'>
                <img src={avatar} className=' w-[40px] md:w-[48px] rounded-full' />
            </div>
        </div>
    )
}

export default Header