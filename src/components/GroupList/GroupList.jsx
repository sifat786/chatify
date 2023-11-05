import React from 'react'
import gl1 from '../../assets/gl1.png';
import gl2 from '../../assets/gl2.png';
import gl3 from '../../assets/gl3.png';

import {BsThreeDotsVertical} from 'react-icons/bs'

const GroupList = () => {
  return (
    <div className='shadow px-[22px] rounded-lg'>
        <div className='flex justify-between py-[20px] items-center'>
            <h2 className='font-pops text-[20px] font-semibold'>Groups List</h2>
            <BsThreeDotsVertical/>
        </div>
        <div className='flex items-center pb-[14px] border-b-2'>
            <img src={gl1} alt="" />
            <div className='ml-[20px]'>
                <p className='font-pops text-[18px] font-semibold'>Friends Reunion</p>
                <p className='font-pops text-[14px] font-medium text-third'>Hi Guys, Wassup!</p>
            </div>
            <div className='ml-[50px]'>
                <button className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Join</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[14px] border-b-2'>
            <img src={gl2} alt="" />
            <div className='ml-[20px]'>
                <p className='font-pops text-[18px] font-semibold'>Friends Reunion</p>
                <p className='font-pops text-[14px] font-medium text-third'>Hi Guys, Wassup!</p>
            </div>
            <div className='ml-[50px]'>
                <button className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Join</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[20px] '>
            <img src={gl3} alt="" />
            <div className='ml-[20px]'>
                <p className='font-pops text-[18px] font-semibold'>Friends Reunion</p>
                <p className='font-pops text-[14px] font-medium text-third'>Hi Guys, Wassup!</p>
            </div>
            <div className='ml-[50px]'>
                <button className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Join</button>
            </div>
        </div>
    </div>
  )
}

export default GroupList