import React, { createRef, useState } from 'react';
import profile from '../../assets/profile.png';

import {LiaHomeSolid} from 'react-icons/lia';
import {AiFillMessage} from 'react-icons/ai';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FiSettings} from 'react-icons/fi';
import {IoLogOutOutline} from 'react-icons/io5';
import {FaCloudUploadAlt} from 'react-icons/fa';

import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Cropper } from 'react-cropper';
import "cropperjs/dist/cropper.css";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { useSelector } from 'react-redux';


const Sidebar = () => {

  const navigate = useNavigate();
  const auth = getAuth();
  const storage = getStorage();

  const [image, setImage] = useState();
  const [cropData, setCropData] = useState();
  const cropperRef = createRef()
  
  const [imgUpPopup, setImgUpPopup] = useState(false);

  const data = useSelector(state => state.userLoginInfo.userInfo)
  console.log(data);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success('GoodBye Sefuda 😭')
      setTimeout(() => {
        navigate('/login')
      }, 3000);

    }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
  }

  const handleImageUpload = () => {
    setImgUpPopup(true);
  }

  const handleCancelImgUpload = () => {
    setImgUpPopup(false);
    setImage('')
  }

  const handleImageChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleUploadImage = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

      const storageRef = ref(storage, auth.currentUser.uid);

      const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
        uploadString(storageRef, message4, 'data_url').then((snapshot) => {
          console.log('Uploaded a data_url string!');

        getDownloadURL(uploadData.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          updateProfile(auth.currentUser, {
            photoURL: downloadURL
          }).then(() => {
            setImgUpPopup(false);
            setImage('');
            setCropData('');
          })
        });

      });

    }
  };

  return (

    <div className='bg-primary h-screen rounded-lg pt-[38px]'>
        <div className='group relative w-[100px] h-[100px] mx-auto'>
          <img src={profile} alt="profile" className='mx-auto'/>
          <div onClick={handleImageUpload} className='bg-shadow opacity-0 group-hover:opacity-100 rounded-full w-full h-full mx-auto     absolute top-0 left-0 flex justify-center items-center transition duration-300 ease-in-out cursor-pointer'>
              <FaCloudUploadAlt className='text-[#EBEAEA] text-[25px]'/>
          </div>
        </div>
        <h1 className='font-sans font-bold text-[34px] text-secondary'></h1>
        
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

          {/* //! toastify: */}
          <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="dark"
          />

        </div>

        {
          imgUpPopup &&
          <div className='bg-primary absolute top-0 left-0 h-screen w-full z-[100] flex justify-center items-center'>
            <div className='bg-white py-[50px] px-[120px] rounded-lg'>
              <h1 className='font-sans font-bold text-[50px] text-black'>Upload Image</h1>

              {/* //! cropper: */}
              <div className='w-[100px] h-[100px] mx-auto rounded-full overflow-hidden my-[10px]'>
                <div className='img-preview w-full h-full rounded-full'></div>
              </div>
              {
                image &&
                  <Cropper
                    ref={cropperRef}
                    style={{ height: 400, width: "100%" }}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    guides={true}
                  />
              }

              <input type="file" onChange={handleImageChange} className='py-[25px] text-red-600 uppercase'/>

              <div className='mt-[10px]'>
                <button onClick={handleUploadImage} className='bg-primary text-white text-[20px] px-[30px] py-[15px] rounded-md'>Upload</button>
                <button onClick={handleCancelImgUpload} className='bg-red-500 text-white text-[20px] px-[30px] py-[15px] rounded-md ml-[15px]'>Cancel</button>
              </div>
            </div>
          </div>
        }

    </div>
  )
}

export default Sidebar