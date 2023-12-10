import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import fr1 from '../../assets/fr1.png';
import {BsThreeDotsVertical} from 'react-icons/bs';

const MyGroups = () => {

  const db = getDatabase();
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const [myGroup, setMyGroup] = useState([]);


  useEffect(() => {
    const myGroupRef = ref(db, 'mygroup/');
    onValue(myGroupRef, (snapshot) => {
        let arr = [];
        snapshot.forEach((item) => {
          if(data.uid == item.val().adminid){
            arr.push(item.val());
          }
        })
        setMyGroup(arr);
    });
},[]);

  return (
    <div className='shadow px-[22px] w-[440px] h-[430px] overflow-y-auto rounded-lg mt-[32px]'>
        <div className='flex justify-between py-[20px] items-center'>
            <h2 className='font-pops text-[20px] font-semibold'>My Groups</h2>
            <BsThreeDotsVertical/>
        </div>
        {
          myGroup.map((item) => (
            <div className='flex items-center pb-[14px] border-b-2'>
              <img src={fr1} alt="" />
              <div className='ml-[20px] w-[150px]'>
                  <h5 className='font-pops font-bold'>{item.admin}</h5>
                  <p className='font-pops text-[18px] font-semibold'>{item.groupName}</p>
                  <p className='font-pops text-[14px] font-medium text-third'>{item.groupTagName}</p>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default MyGroups