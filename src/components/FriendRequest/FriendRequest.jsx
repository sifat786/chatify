import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";

import fr1 from '../../assets/fr1.png';
import {BsThreeDotsVertical} from 'react-icons/bs';

const FriendRequest = () => {

    const db = getDatabase();
    const [friendRequestList, setFriendRequestList] = useState([]);
    const data = useSelector(state => state.userLoginInfo.userInfo);

    useEffect(() => {
        const friendRequestRef = ref(db, 'friendRequest/');
        onValue(friendRequestRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if(item.val().receiverid == data.uid) {
                    arr.push({...item.val(), id:item.key});
                }
            })
            setFriendRequestList(arr);
        });
    },[]);

    const handleFriend = (item) => {
        set(push(ref(db, 'friend/')), {
            ...item
        }).then(()=> {
            remove((ref(db, 'friendRequest/' + item.id)))
        })
    }

  return (
    <div className='shadow px-[22px] w-[450px] h-[430px] overflow-y-auto rounded-lg mt-[32px]'>
        <div className='flex justify-between py-[20px] items-center'>
            <h2 className='font-pops text-[20px] font-semibold'>Friend Request</h2>
            <BsThreeDotsVertical/>
        </div>
        {
            friendRequestList.map((item) => (
                <div className='flex items-center pb-[14px] border-b-2'>
                    <img src={fr1} alt="" />
                    <div className='ml-[20px] w-[150px]'>
                        <p className='font-pops text-[18px] font-semibold'>{item.sendername}</p>
                        <p className='font-pops text-[14px] font-medium text-third'>Dinner?</p>
                    </div>
                    <div className='ml-[20px]'>
                        <button onClick={() =>handleFriend(item)} className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Accept</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default FriendRequest