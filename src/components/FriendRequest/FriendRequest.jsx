import React from 'react'
import fr1 from '../../assets/fr1.png';
import fr2 from '../../assets/fr2.png';
import fr3 from '../../assets/fr3.png';
import fr4 from '../../assets/fr4.png';

import {BsThreeDotsVertical} from 'react-icons/bs';

const FriendRequest = () => {
  return (
    <div className='shadow px-[22px] w-[450px] h-[430px] overflow-y-auto rounded-lg mt-[32px]'>
        <div className='flex justify-between py-[20px] items-center'>
            <h2 className='font-pops text-[20px] font-semibold'>Friend Request</h2>
            <BsThreeDotsVertical/>
        </div>
        <div className='flex items-center pb-[14px] border-b-2'>
            <img src={fr1} alt="" />
            <div className='ml-[20px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Raghav</p>
                <p className='font-pops text-[14px] font-medium text-third'>Dinner?</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Accept</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[14px] border-b-2'>
            <img src={fr2} alt="" />
            <div className='ml-[20px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Swathi</p>
                <p className='font-pops text-[14px] font-medium text-third'>Sure!</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Accept</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[20px] border-b-2'>
            <img src={fr3} alt="" />
            <div className='ml-[20px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Kiran</p>
                <p className='font-pops text-[14px] font-medium text-third'>Hi.....</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Accept</button>
            </div>
        </div>
        <div className='flex items-center pt-[17px] pb-[20px]'>
            <img src={fr4} alt="" />
            <div className='ml-[20px] w-[150px]'>
                <p className='font-pops text-[18px] font-semibold'>Tejeshwini C</p>
                <p className='font-pops text-[14px] font-medium text-third'>I will call him today.</p>
            </div>
            <div className='ml-[20px]'>
                <button className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Accept</button>
            </div>
        </div>
    </div>
  )
}

export default FriendRequest