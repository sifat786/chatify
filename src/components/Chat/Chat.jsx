import React from 'react'

import { BsThreeDotsVertical } from 'react-icons/bs';
import fr2 from '../../assets/fr2.png';

const Chat = () => {
  return (
    <div className='shadow h-[870px] overflow-y-auto rounded-lg mt-[32px]'>
        <div className='flex justify-between px-[52px] pt-[25px] pb-[25px] items-center'>
            <img src={fr2}  />
            <div className='mr-[350px] '>
                <h2 className='font-pops text-[24px] font-semibold'>Swathi</h2>
                <p className='font-pops text-[14px] text-[#000000D9] '>Online</p>
            </div>
            <BsThreeDotsVertical/>
        </div>
        <div className='h-[1px] mx-auto w-[598px] bg-[#00000040] '></div>
    </div>
  )
}

export default Chat