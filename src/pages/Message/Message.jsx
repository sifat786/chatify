import React from 'react'
import Friends from './../../components/Friends/Friends';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chat from '../../components/Chat/Chat';

const Message = () => {
  return (
    <div className='flex bg-white'>
          <div className='w-[186px]'>
            <Sidebar active='message' />
          </div>
          <div className='w-[427px] ml-[43px]'>
            <Friends/>
          </div>
          <div className='w-[690px] ml-[43px]'>
            <Chat/>
          </div>
      </div>
  )
}

export default Message