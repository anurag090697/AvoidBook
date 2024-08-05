/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
function Profile() {
  const location = useLocation();
  const { data } = location.state || {};
  //   const { data } = useParams();
  //   const data = location.state?.props.data || {};
  const [userid, setUserid] = useState();
  const [profile, setProfile] = useState();
  const [photos, setPhotos] = useState();
  console.log(data);
  async function getuser(str) {
    let response = await axios.get(
      `https://api.unsplash.com/users/${userid}?client_id=${ACCESS_KEY}`
    );
    setProfile(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    setUserid(data.user.username);
    if (userid) getuser();
    // console.log(data.user.username);
  }, [data]);

  return (
    <div className='w-full dark:bg-slate-700 py-6 '>
      <div className='text-3xl w-fit py-10 px-6 w-[500px] text-center max-w-full mx-auto border shadow-lg dark:text-white flex'>
        <div>
          <img
            src={
              data.user.profile_image.large ||
              data.user.profile_image.medium ||
              data.user.profile_image.small
            }
            className='rounded-full border border-gray-700 w-44 h-44'
            alt=''
          />
          <h2 className='text-xl'>{data.user.username}</h2>
        </div>
        <div className='w-3/5'>
          <div className='flex text-lg font-medium items-start justify-center text-gray-600 gap-2 '>
            <div className='flex flex-col w-1/3 items-center'>
              <span className='bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sky-600'>
                {profile ? profile.photos.length : "0"}
              </span>
              <span>Posts</span>
            </div>
            <div className='flex flex-col w-1/3 items-center'>
              <span className='bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sky-600'>
                {profile ? profile.followers_count : "0"}
              </span>
              <span>Followers</span>
            </div>
            <div className='flex flex-col w-1/3 items-center'>
              <span className='bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-sky-600'>
                {profile ? profile.following_count : "0"}
              </span>
              <span>Following</span>
            </div>
          </div>
          <div className='flex flex-col items-start pl-4 pr-2 '>
            <h1 className=''>{data.user.name}</h1>{" "}
            <h3 className='text-sm'>{}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
