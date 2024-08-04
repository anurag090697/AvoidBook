/** @format */

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function Postcard(props) {
//   console.log(Object.keys(props.data.topic_submissions));
  const [like, setLike] = useState(false);
  return (
    <div className=' border shadow-xl select-none max-w-[500px]'>
      <div className='flex items-center justify-start gap-4 font-medium dark:text-white px-4 py-2'>
        <img
          src={
            props.data.user.profile_image.large ||
            props.data.user.profile_image.medium ||
            props.data.user.profile_image.small
          }
          alt=''
          className='rounded-full w-16 h-16'
        />
        <div className=''>
          <h3>{props.data.user.name}</h3>
          <h4 className='text-gray-500 dark:text-gray-400'>
            {props.data.created_at}
          </h4>
        </div>
      </div>
      <img
        src={props.data.urls.full || props.data.urls.regular}
        alt=''
        className='max-w-full '
      />
      <p className='p-2 font-medium text-gray-600 dark:text-gray-400'>
        {props.data.alt_description}
      </p>
      <div className='flex items-center gap-2 px-3 dark:text-white'>
        {props.data.topic_submissions
          ? Object.keys(props.data.topic_submissions).map((ele, idx) => {
              return <p key={idx}>#{ele}</p>;
            })
          : ""}
      </div>
      <div className='px-3 text-2xl py-2 flex items-center gap-3 dark:text-white'>
        <span
          className={`${like ? "text-red-500" : "text-gray-500"} dark:text-gray-400`}
          onClick={() => setLike(!like)}
        >
          <FaHeart />
        </span>
        <span className="text-lg">{like ? props.data.likes+1 : props.data.likes} Likes</span>
      </div>
    </div>
  );
}

export default Postcard;
