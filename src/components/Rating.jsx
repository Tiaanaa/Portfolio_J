import React from 'react';
import { FaStar } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";

const Rating = () => {
  return (
    <div className='flex items-center justify-between gap-2 mb-4 mt-4'>
                    <span className='flex'> <img src="/src/assets/IMG_20210214_130932_054.jpg" alt="Me" className="rounded-full w-10 mr-2" />
                    <p><span className="text-purple-400">@Whoistiana</span> <br/><span className='text-sm font-thin text-gray-400/60'>Created 5 months ago</span></p></span>
                    <p className='flex items-center gap-2'><span className='flex items-center gap-1'> <TbMessageCircleFilled />details</span> <span className='flex items-center gap-1'> <FaStar size={16} className="text-gray/400/30"/> 3 stars</span></p>
                  </div>
  )
}

export default Rating
