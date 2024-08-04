/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiHandWavingLight } from "react-icons/pi";
import Postcard from "./Postcard";
import arr from "./dummydata.json";

// https://dummyjson.com/posts
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
// console.log(API_KEY, ACCESS_KEY);
function Home() {
  const [data, setData] = useState();
  const [feed, setFeed] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      setData([...data, ...feed]);
    } else setData(feed);
  }, [feed]);
  const query = ["nature", "cat", "dog", "car", "pets", "travel"];
  async function getData() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${
          query[Math.floor(Math.random() * 6)]
        }&page=${"1"}`
      );
      //   return response.data.results;

      if (response) setFeed(response.data.results);
      //   console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function setMore() {
    let tm2 = await getData().then(setFeed(tm2));
  }

  //   console.log(data);
  return (
    <div className='w-full dark:bg-slate-700 py-6 '>
      <div className='text-3xl w-fit py-10 px-6 w-[500px] text-center max-w-full mx-auto border shadow-lg dark:text-white'>
        <div className='flex pb-4 items-center gap-2 justify-center'>
          {" "}
          <span className='font-medium '> Hey There </span>{" "}
          <span className='text-4xl text-lime-700 animate-wigglemore animate-infinite dark:text-sky-400'>
            {" "}
            <PiHandWavingLight />
          </span>
        </div>
        <h2> Welcome To AvoidBook</h2>
      </div>
      <div className='flex flex-col gap-10 items-center justify-center py-10'>
        {data ? (
          data.map((ele, idx) => {
            return <Postcard data={ele} key={idx}></Postcard>;
          })
        ) : (
          <p className='text-center text-red-500 py-6 text-xl font-medium'>
            Please Wait
          </p>
        )}
      </div>
      <div
        className='text-center text-2xl font-medium text-sky-500 cursor-pointer'
        onClick={() => setMore()}
      >
        {data ? "Load More..." : ""}
      </div>
    </div>
  );
}

export default Home;
