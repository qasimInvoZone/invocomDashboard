// ** React Imports
import User1 from '../../../assets/images/avatars/demo_user.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Search } from 'react-feather'
import { useHistory } from 'react-router-dom'
const SidebarLeft = ({ renderChatParent, chats }) => {
  const history = useHistory()
  const token = localStorage.getItem('token');
  if(!token){
    history.push('/login');
  }
  const [user, setUser] = useState({})
  const [search, setSearch] = useState('')
  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    setUser(user)

  }, [axios, setUser])

 function renderChat(chat_id) {
   renderChatParent(chat_id)
 }
  return  (

    <>
    <div className="left-section mCustomScrollbar" data-mcs-theme="minimal-dark">
    <div className="headLeft-section">
      <div className="headLeft-sub">
        <Search className="search_icon_chat" />
        <input type="text" name="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
      </div>
    </div>
        <ul>
          {
            chats?.length > 0 && chats?.map(chat => (
              <li href="/apps/chat/messages" className="active" onClick={() => renderChat(chat._id)}>
              <div className="chatList">
                <div className="img">
                  <img src={User1} />
                </div>
                <div className="desc">
              {
                chat.unReadMessages > 0 &&<div className="counter">{chat.unReadMessages}</div>
              }
              <h5 style={{fontWeight:"bold"}}>{user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN' ?  chat?.client?.fullname : chat?.superAdmin?.fullname}</h5>
              <p>{ chat?.messages[chat?.messages?.length - 1]?.message }</p>
                </div>
              </div>
            </li>
            ))
          }
        </ul>
      </div></>
  )
}

export default SidebarLeft
