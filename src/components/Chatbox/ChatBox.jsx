import React from 'react';
import './ChatBox.css';
import assets from '../../../public/assets/assets';

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="Profile" />
        <p className="user-container">
          Karthick <img src={assets.green_dot} height={20} width={20} alt="Online Status" />
        </p>
        <img src={assets.help_icon} class="help" alt="Help Icon" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
        <div className="s-msg">
          <p className="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
        <div className="s-msg">
          <p className="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
        <div className="s-msg">
          <p className="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label for="image">
          <img src={assets.gallery_icon} alt="Gallery" />
        </label>
        <img src={assets.send_button} alt="Send" />
      </div>
    </div>

  );
};

export default ChatBox;
