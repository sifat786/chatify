import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, set, push } from "firebase/database";

import fr1 from '../../assets/fr1.png';
import {BsThreeDotsVertical} from 'react-icons/bs';


const UserList = () => {

    const db = getDatabase();
    const data = useSelector(state => state.userLoginInfo.userInfo);
    const [userList, setUserList] = useState([]);
    const [friendRequestList, setFriendRequestList] = useState([]);
    const [friendList, setFriendList] = useState([]);
    const [blockList, setBlockList] = useState([]);
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if(data.uid != item.key){
                    arr.push({ ...item.val(), userid: item.key })
                }
            })
            setUserList(arr)
        });
    },[]);

    useEffect(() => {
        const friendRequestRef = ref(db, 'friendRequest/');
        onValue(friendRequestRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                arr.push(item.val().receiverid + item.val().senderid);
            })
            setFriendRequestList(arr);
        });
    },[]);

    useEffect(() => {
        const friendRef = ref(db, 'friend/');
        onValue(friendRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                arr.push(item.val().receiverid + item.val().senderid);
            })
            setFriendList(arr);
        });
    },[]);

    useEffect(() => {
        const blockRef = ref(db, 'block/');
        onValue(blockRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                arr.push(item.val().blockbyid + item.val().blockid);
            })
            setBlockList(arr);
        });
    },[]);

    const handleFriendRequest = (item) => {
        set(push(ref(db, 'friendRequest/')), {
            receivername: item.username,
            receiverid: item.userid,
            sendername: data.displayName,
            senderid: data.uid,
        });
    }

    const handleSearch = (e) => {
        let arr = []
        if(e.target.value.length == 0) {
            setSearchData([])
        }else{
            userList.filter((item) => {
                if(item.username.toLowerCase().includes(e.target.value.toLowerCase())){
                    arr.push(item)
                    setSearchData(arr)
                }
            })
        }
    }

  return (
    <div className='shadow px-[22px] w-[480px] h-[420px] overflow-y-auto rounded-lg mt-[32px]'>
        <div className='flex justify-between py-[20px] items-center'>
            <h2 className='font-pops text-[20px] font-semibold'>User List</h2>
            <BsThreeDotsVertical/>
        </div>
        <div>
            <input onChange={handleSearch} type="text" className='p-2 border border-primary outline-none rounded-lg fixed'/>
        </div>
            {
                searchData.length > 0 ?

                searchData.map((item) => (
                    <div className='flex items-center pb-[14px] border-b-2 mt-[55px]'>
                        <img src={fr1} alt="" />
                        <div className='ml-[20px] w-[150px]'>
                            <p className='font-pops text-[18px] font-semibold'>{item.username}</p>
                            <p className='font-pops text-[14px] font-medium text-third'>{item.email}</p>
                        </div>
                        {
                            blockList.includes(item.userid + data.uid) ||
                            blockList.includes(data.uid + item.userid)


                            ?

                            <div className='ml-[90px]'>
                            <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Block</button>
                            </div>

                            
                            :


                            friendList.includes(item.userid + data.uid) ||
                            friendList.includes(data.uid + item.userid)
                            ?
                            <div className='ml-[90px]'>
                            <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Friend</button>
                            </div>
                            :
                            friendRequestList.includes(item.userid + data.uid) ||
                            friendRequestList.includes(data.uid + item.userid)
                            ?
                            <div className='ml-[90px]'>
                            <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>pending</button>
                            </div>
                            :
                            <div className='ml-[90px]'>
                            <button onClick={() =>handleFriendRequest(item)} className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>+</button>
                            </div>
                        }
    
                                
                    </div>
                ))
                :
                userList.map((item) => (
                    <div className='flex items-center pb-[14px] border-b-2 mt-[55px]'>
                        <img src={fr1} alt="" />
                        <div className='ml-[20px] w-[150px]'>
                            <p className='font-pops text-[18px] font-semibold'>{item.username}</p>
                            <p className='font-pops text-[14px] font-medium text-third'>{item.email}</p>
                        </div>
                        {
                            blockList.includes(item.userid + data.uid) ||
                            blockList.includes(data.uid + item.userid)


                            ?

                            <div className='ml-[90px]'>
                            <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Block</button>
                            </div>

                            
                            :


                            friendList.includes(item.userid + data.uid) ||
                            friendList.includes(data.uid + item.userid)
                            ?
                            <div className='ml-[90px]'>
                            <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>Friend</button>
                            </div>
                            :
                            friendRequestList.includes(item.userid + data.uid) ||
                            friendRequestList.includes(data.uid + item.userid)
                            ?
                            <div className='ml-[90px]'>
                            <button className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>pending</button>
                            </div>
                            :
                            <div className='ml-[90px]'>
                            <button onClick={() =>handleFriendRequest(item)} className='px-[15px] py-[2px] bg-primary rounded-md   font-pops text-[20px] font-semibold text-white'>+</button>
                            </div>
                        }
    
                                
                    </div>
                ))
            }
    </div>
  )
}

export default UserList