import React, { useEffect, useState } from 'react'
import gl1 from '../../assets/gl1.png';

import { useSelector } from 'react-redux';
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const GroupList = () => {
    const db = getDatabase();
    const data = useSelector(state => state.userLoginInfo.userInfo);

    const [groupShow, setGroupShow] = useState(false)
    const [groupName, setGroupName] = useState('');
    const [groupTagName, setGroupTagName] = useState('');
    const [groupList, setGroupList] = useState([]);

    useEffect(() => {
        const groupListRef = ref(db, 'mygroup/');
        onValue(groupListRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
              if(data.uid == item.val().adminid){
                arr.push(item.val());
              }
            })
            setGroupList(arr);
        });
    },[]);

    const handleCreateGroupPopup = () => {
        setGroupShow(true)
    }

    const handleCreateGroup = () => {
        set(push(ref(db, 'mygroup/')), {
            groupName: groupName,
            groupTagName: groupTagName,
            admin: data.displayName,
            adminid: data.uid
        });
        setGroupShow(false)
    }

    const handleCancel = () => {
        setGroupShow(false)
    }

  return (
    <div className='shadow px-[22px] w-[450px] h-[430px] overflow-y-auto rounded-lg mt-[30px]'>
        <div className='flex justify-between py-[20px] items-center flex-wrap'>
            <h2 className='font-pops text-[20px] font-semibold'>Groups List</h2>
            <button onClick={() =>handleCreateGroupPopup()} className='p-3 bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Create Group</button>
            {
                groupShow ?
                <div className='absolute top-0 right-0 w-full h-screen bg-primary flex justify-center items-center'>
                    <div className='bg-white py-[100px] px-[140px] rounded-lg'>
                        <input onChange={(e)=>setGroupName(e.target.value)} type="text" placeholder='Group name' className='w-full mt-5 p-3 border-2 outline-none rounded-lg'/>
                        <input onChange={(e)=>setGroupTagName(e.target.value)} type="text" placeholder='Group tagname' className='w-full mt-5 p-3 border-2 outline-none rounded-lg'/>

                        <button onClick={handleCreateGroup}  className='py-[15px] px-[25px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Create Group</button>
                        <button onClick={() =>handleCancel()} className='py-[15px] px-[25px]  ml-5 mt-5 bg-red-500 rounded-md   font-pops text-[20px] font-semibold text-white'>Cancel</button>
                    </div>
                </div>
                :
                <>
                    {
                        groupList.map((item)=> (
                            <div className='flex items-center pb-[14px] border-b-2'>
                            <img src={gl1} alt="" />
                            <div className='ml-[20px] w-[150px]'>
                                <h5 className='font-pops font-bold'>{item.admin}</h5>
                                <p className='font-pops text-[18px] font-semibold'>{item.groupName}</p>
                                <p className='font-pops text-[14px] font-medium text-third'>{item.groupTagName}</p>
                            </div>
                        </div>
                        ))
                    }
                </>
            }
        </div>
    </div>
  )
}

export default GroupList