import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, push, set, remove} from "firebase/database";

import fr1 from '../../assets/fr1.png';
import {BsThreeDotsVertical} from 'react-icons/bs';

const Friends = () => {

    const db = getDatabase();
    const [friendList, setFriendList] = useState([]);
    const data = useSelector(state => state.userLoginInfo.userInfo);

    useEffect(() => {
        const friendRef = ref(db, 'friend/');
        onValue(friendRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if(data.uid == item.val().receiverid || data.uid == item.val().senderid){
                    arr.push({...item.val(), id:item.key});
                }
            })
            setFriendList(arr);
        });
    },[]);

    const handleBlock = (item) => {
        if(data.uid == item.senderid) {
            set(push(ref(db, 'block/')),{
                block: item.receivername,
                blockid: item.receiverid,
                blockby: item.sendername,
                blockbyid: item.senderid
            }).then(() => {
                remove(ref(db, 'friend/' + item.id))
            })

        }else {
            set(push(ref(db, 'block/')),{
                block: item.sendername,
                blockid: item.senderid,
                blockby: item.receivername,
                blockbyid: item.receiverid
            }).then(() => {
                remove(ref(db, 'friend/' + item.id))
            })
        }
    }

  return (
    <div className='shadow px-[22px] w-[440px] h-[430px] overflow-y-auto rounded-lg mt-[32px]'>
        <div className='flex justify-between py-[20px] items-center'>
            <h2 className='font-pops text-[20px] font-semibold'>Friends</h2>
            <BsThreeDotsVertical/>
        </div>
        {
            friendList.map((item) => (
                <div className='flex items-center pb-[14px] border-b-2'>
                    <img src={fr1} alt="" />
                    <div className='ml-[20px] w-[150px]'>
                        <p className='font-pops text-[18px] font-semibold'>
                            {
                                item.receiverid == data.uid ? item.sendername : item.receivername
                            }
                        </p>
                        <p className='font-pops text-[14px] font-medium text-third'>Dinner?</p>
                    </div>
                    <div className='ml-[20px]'>
                        <button onClick={()=>handleBlock(item)} className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Block</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Friends