import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Sidebar from '../../components/Sidebar/Sidebar';
import GroupList from '../../components/GroupList/GroupList';


const Home = () => {

  const navigate = useNavigate();
  const auth = getAuth();
  const [verify, setVerify] = useState(false);

  const data = useSelector(state => state.userLoginInfo.userInfo)
  console.log(data);
  

    useEffect(() => {
      if(!data) {
        navigate("/Login");
      }
    }, []);

    onAuthStateChanged(auth, (user) => {
      if (user.emailVerified) {
        setVerify(true)
      }
    });

  return (
    <div>
      {
        verify ?
        <div className='flex bg-white'>
          <div className='w-[186px]'>
            <Sidebar/>
          </div>
          <div className='w-[427px] ml-[43px]'>
            <GroupList/>
          </div>
          <div className='w-[344px]'>sdfs</div>
          <div className='w-[344px]'>sdf</div>
        </div>
        :
        <div className='h-screen w-full bg-primary flex justify-center items-center'>
          <div className='bg-white py-[140px] px-[180px] text-center rounded-lg'>
            <h1 className='font-sans font-bold text-[34.40px] text-secondary mb-[40px]'>🚨 Please Verify Your Email !! 🚨</h1>
            <button className='px-[30px] py-[20px] bg-primary rounded-[8.7px]'>
              <Link className='text-white text-center font-sans font-semibold text-[20px]' to='/Login'>Back to Login</Link>
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default Home