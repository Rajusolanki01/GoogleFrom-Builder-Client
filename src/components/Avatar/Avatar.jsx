import React from 'react'
import userImg from "../../assets/account.png"

function Avatar() {
    return (
    <div className="Avatar">
      <img src={userImg} alt="User Avatar" className='w-8' />
    </div>
  );
}

export default Avatar