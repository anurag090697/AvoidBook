/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

function Postdetailed() {
  const location = useLocation();
  const { data } = location.state || {};

  //   console.log(data);

  return (
    <div className='w-full dark:bg-slate-700 py-6 min-h-[540px] flex items-center justify-center '>
      <div className=' max-w-[550px] rounded-lg overflow-hidden font-medium text-lg flex flex-col gap-4 border-2 border-slate-300'>
        <img src={data.urls.raw} alt='' />
        <h2 className='text-emerald-600 p-2'>
          {data.description || data.alt_description}
        </h2>
        <h3 className='text-sky-500 p-2'>-{data.user.name}</h3>
      </div>
    </div>
  );
}

export default Postdetailed;
