import React from 'react';
import profile from '../../assets/profile.png';
import {LiaHomeSolid} from 'react-icons/lia';
import {AiFillMessage} from 'react-icons/ai';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FiSettings} from 'react-icons/fi';
import {IoLogOutOutline} from 'react-icons/io5';

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const navigate = useNavigate();
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setTimeout(() => {
        navigate('/login')
      }, 2000);

    }).catch((error) => {
      console.log(error.code);
    });
  }

  return (

    <div className='bg-primary h-screen rounded-lg pt-[38px]'>
        <img src={profile} alt="profile" className='mx-auto'/>
        <div className='relative mt-[78px] py-[20px] after:absolute after:content-[""] after:h-full after:w-full after:top-0 after:left-[25px] after:-z-10 z-10 after:bg-white after:rounded-l-lg overflow-hidden      before:absolute before:content-[""] before:h-full before:w-[8px] before:top-0 before:right-0 before:bg-primary before:rounded-l-lg after:cursor-pointer cursor-pointer'>
          <LiaHomeSolid className='mx-auto text-5xl text-primary'/>
        </div>
        <div className='mt-[60px] cursor-pointer'>
          <AiFillMessage className='mx-auto text-5xl text-[#BAD1FF]'/>
        </div>
        <div className='mt-[80px] cursor-pointer'>
          <IoIosNotificationsOutline className='mx-auto text-5xl text-[#BAD1FF]'/>
        </div>
        <div className='mt-[80px] cursor-pointer'>
          <FiSettings className='mx-auto text-5xl text-[#BAD1FF]'/>
        </div>
        <div className='mt-[75px] cursor-pointer'>
          <IoLogOutOutline onClick={handleSignOut} className='mx-auto text-5xl text-white'/>
        </div>
    </div>
  )
}

export default Sidebar