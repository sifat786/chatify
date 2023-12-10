import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { userLoginInfo } from '../../slices/userSlice';

import Sidebar from '../../components/Sidebar/Sidebar';
import GroupList from '../../components/GroupList/GroupList';
import FriendRequest from '../../components/FriendRequest/FriendRequest';
import Friends from '../../components/Friends/Friends';
import MyGroups from '../../components/MyGroups/MyGroups';
import UserList from '../../components/UserList/UserList';
import Unblock from '../../components/Unblock/Unblock';


const Home = () => {

  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
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
        dispatch(userLoginInfo(user))
        localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo(user)))
      }
    });

  return (
    <div>
      {
        verify ?
        <div className='flex bg-white'>
          <div className='w-[186px]'>
            <Sidebar active='home' />
          </div>
          <div className='w-[427px] ml-[43px]'>
            <GroupList/>
            <FriendRequest/>
          </div>
          <div className='w-[427px] ml-[43px]'>
            <Friends/>
            <MyGroups/>
          </div>
          <div className='w-[427] ml-[43px]'>
            <UserList/>
            <Unblock/>
          </div>
        </div>
        :
        <div className='h-screen w-full bg-primary flex justify-center items-center'>
          <div className='bg-white py-[140px] px-[180px] text-center rounded-lg'>
            <h1 className='font-sans font-bold text-[34.40px] text-secondary mb-[40px]'>🚨 Please Verify Your Email !! 🚨</h1>
            <button className='px-[30px] py-[20px] bg-red-500 rounded-[8.7px]'>
              <Link className='text-white text-center font-sans font-semibold text-[20px]' to='/Login'>Back to Login</Link>
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default Home