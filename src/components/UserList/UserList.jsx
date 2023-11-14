import React from 'react'
import fr1 from '../../assets/fr1.png';
import fr2 from '../../assets/fr2.png';
import fr3 from '../../assets/fr3.png';
import fr4 from '../../assets/fr4.png';
import fr5 from '../../assets/fr5.png';

import {BsThreeDotsVertical} from 'react-icons/bs';

const UserList = () => {
  return (
    <div className='shadow px-[22px] w-[430px] h-[420px] overflow-y-auto rounded-lg mt-[32px]'>
        <div className='flex justify-between py-[20px] items-center'>
            <h2 className='font-pops text-[20px] font-semibold'>User List</h2>
            <BsThreeDotsVertical/>
        </div>
        <div className='flex items-center pb-[14px] border-b-2'>
            <img src={fr1} alt="" />
            <div className='ml-[20px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Raghav</p>
                <p className='font-pops text-[14px] font-medium text-third'>Today, 8:56pm?</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>+</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[14px] border-b-2'>
            <img src={fr2} alt="" />
            <div className='ml-[20px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Swathi</p>
                <p className='font-pops text-[14px] font-medium text-third'>Today, 2:31pm</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>+</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[20px] border-b-2'>
            <img src={fr3} alt="" />
            <div className='ml-[20px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Kiran</p>
                <p className='font-pops text-[14px] font-medium text-third'>Yesterday, 6:22pm</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>+</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[20px] border-b-2'>
            <img src={fr4} alt="" />
            <div className='ml-[20px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Tejeshwini</p>
                <p className='font-pops text-[14px] font-medium text-third'>Today, 12:22pm</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>+</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[20px]'>
            <img src={fr5} alt="" />
            <div className='ml-[40px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Marvin</p>
                <p className='font-pops text-[14px] font-medium text-third'>Today, 8:56pm</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>+</button>
            </div>
        </div>
    </div>
  )
}

export default UserList