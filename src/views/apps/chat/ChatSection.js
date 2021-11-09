import React, { useEffect, useState, useRef } from "react"
import User1 from "../../../assets/images/avatars/12-small.png"
import { RefreshCw, Delete, Smile, Send } from "react-feather"
import { Button } from "bootstrap"
import Modal from './ChatModal'
import axios from 'axios'
import Picker from 'emoji-picker-react';


const ChatSection = ({ chat, sendMessageParent }) => {

  const [user, setUser] = useState({})
  const [message, setMessage] = useState('')
  const [showModal , setShowModal] = useState(false)
  const [admins, setAdmins] = useState([])
  const [showEmoji, setShowEmoji] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState(null);
    console.log(showEmoji);
    const onEmojiClick = (event, emojiObject) => {
      console.log('emojis :::: ',emojiObject)
      setChosenEmoji(emojiObject.emoji);
      let tempString = message +' '+emojiObject.emoji;
      setMessage(tempString)
      console.log(message)
    };
  useEffect(() => {

      const user = JSON.parse(localStorage.getItem('user'))
      setUser(user)
  }, [setUser])

  function sendMessage(chat_id) {
    if (message !== '') {
        sendMessageParent(chat_id, message)
        setMessage('');
    }
  }
  const joinChat = async (chatId) => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/assign`
      const token = localStorage.getItem('token');
      console.log('token:',token );
      console.log('chatId:',chatId );
      try {
        const response = await axios.post(endPoint,{chatId},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log("rres", response);
        // eslint-disable-next-line no-undef
        setleadsData(response.data);
        if(response.status == 200){
          console.log(response);
        }
      } catch (e) {
        if (e && e?.response && e?.response?.status === 400) {
          console.log(e.response.data)
        }
      }

  }
  const fetchAdmins = async () => {

    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
    const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
    const entity = 'user'
    const endPoint = `${baseUrl}/${apiVersion}/${entity}/admin`
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(endPoint,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log("adminnnnnnnssssssss", response.data);
      setAdmins(response.data.adminUsers);
      if(response.status == 200){
        setShowModal(!showModal);
      }
    } catch (e) {
      console.log("CATCH");
      if (e && e?.response && e?.response?.status === 400) {
        console.log(e.response.data)
      }
    }
  }
  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
        console.log('do validate');
        sendMessage(chat._id)
    }
  }
  return (
    <>
    <div>
    {showModal ? (
          <Modal admins={admins} chatId={chat._id}/>
        ) : ('')}
    </div>

    <div className="complete_right_side">
      <div>
        <div className="headRight-sub">
          <div className="image_name_header">
            <img src={User1} />
            <h3>
                { 
                  user.role === 'SUPER_ADMIN' || user.role === 'ADMIN'  ? chat?.client?.username : chat?.superAdmin?.username 
                }
            </h3>
          </div>
          <div className="chat_head_right_icons">
            <RefreshCw size={16} />
            <Delete size={16} />
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="message mCustomScrollbar" data-mcs-theme="minimal-dark">
          <ul>
            {
                chat && chat?.messages && chat.messages?.length > 0 && chat.messages.map(message => (
                    message?.sender !== chat.client?._id ? <li className="msg-right">
                    <div className="msg-right-sub">
                      <div className="msg-desc">
                        <p>
                          {
                            message?.message
                          }
                        </p>
                      </div>
                      <small>{ message?.createdAt }</small>
                    </div>
                  </li> : <li className="msg-left">
              <div className="msg-left-sub">
                <div className="msg-desc">
                  <p>
                    {
                        message?.message
                    }
                  </p>
                </div>
                <small>{ message.createdAt }</small>
              </div>
            </li>
                ))
            }
            
          </ul>
        </div>
        <div className="right-section-bottom">
          <input type="text" name="" value={message} placeholder="type a message..." 
          onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => handleKeyPress(e)}/>
            {chat.STATUS != "PENDING" ? (
                
                <div className="input_footer_emojis">
                  {showEmoji ? (
                  <div>
                      <Picker onEmojiClick={(event, emojiObject)=>onEmojiClick(event, emojiObject)} /> 
                  </div>
                  ) : (
                  <div>
                    <Smile size={32} onClick={() => setShowEmoji(true)}/>
                  </div>
                  )
              }
                <button onClick={() => sendMessage(chat._id)}>
                  <p>Send</p>
                  <Send size={18} />
                </button>
              </div>
              ) : ( <div className="d-flex align-items-center justify-content-between right-section-bottom-restrict">
              <div>This conversation is not assigned to you. In order to write a message, click "join" or "assign"</div>
              <div className="right-section-bottom-restrict-buttons">
                <div className="right-section-bottom-restrict-buttons-join" onClick={() => joinChat(chat._id)}><strong>Join</strong></div>
                <div className="right-section-bottom-restrict-buttons-join" onClick={() => fetchAdmins()}><strong>Assign</strong></div>
              </div>
            </div>)}
          
        </div>
        </div>
    </div>
    </>
  )
}

export default ChatSection
