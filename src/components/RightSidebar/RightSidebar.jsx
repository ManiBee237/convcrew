import React from 'react'
import './RightSidebar.css'
import assets from '../../../public/assets/assets'
const RightSidebar = () => {
  return (
    <div className='rs'>
        <div className="rs-profile">
            <img src={assets.profile_img} alt="" />
            <h3>Karthick <img src={assets.green_dot} alt="" /></h3>
            <p>Hey there, i am using Convochat</p>
        </div>
        {/* <hr /> */}
        <div className="rs-media">
            <p>Media</p>
            <div>
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
                <img src={assets.pic3} alt="" />
                <img src={assets.pic1} alt="" />
                <img src={assets.pic1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default RightSidebar