import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, push, set, remove} from "firebase/database";

import fr1 from '../../assets/fr1.png';
import {BsThreeDotsVertical} from 'react-icons/bs';

const Unblock = () => {

    const db = getDatabase();
    const [blockList, setBlockList] = useState([]);
    const data = useSelector(state => state.userLoginInfo.userInfo);

    useEffect(() => {
        const blockRef = ref(db, 'block/');
        onValue(blockRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if(item.val().blockbyid == data.uid) {
                    arr.push({
                        id: item.key,
                        block: item.val().block,
                        blockid: item.val().blockid,
                    })
                }else if(item.val().blockid == data.uid) {
                    arr.push({
                        id: item.key,
                        blockby: item.val().blockby,
                        blockbyid: item.val().blockbyid,
                    })
                }
            })
            setBlockList(arr);
        });
    },[]);

    const handleUnblock = (item) => {
        console.log(item);
        set(push(ref(db, 'friend/')),{
            sendername: item.block,
            senderid: item.blockid,
            receivername: data.displayName,
            receiverid: data.uid
        }).then(() => {
            remove(ref(db, 'block/' + item.id))
        })
    }

  return (
    <div className='shadow px-[22px] w-[430px] h-[420px] overflow-y-auto rounded-lg mt-[32px]'>
        <div className='flex justify-between py-[20px] items-center'>
            <h2 className='font-pops text-[20px] font-semibold'>Unblock</h2>
            <BsThreeDotsVertical/>
        </div>
        {
            blockList.map((item) => (
                <div className='flex items-center pb-[14px] border-b-2'>
                    <img src={fr1} alt="" />
                    <div className='ml-[20px] w-[150px]'>
                        <p className='font-pops text-[18px] font-semibold'>{item.block}</p>
                        <p className='font-pops text-[18px] font-semibold'>{item.blockby}</p>
                        <p className='font-pops text-[14px] font-medium text-third'>Today, 8:56pm?</p>
                    </div>
                    <div className='ml-[20px]'>
                        {
                            !item.blockby && 
                            <button onClick={()=>handleUnblock(item)} className='px-[25px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Unblock</button>
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Unblock