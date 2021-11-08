// ** React Imports
import { useState, useEffect, useContext } from 'react'
import { Menu } from 'react-feather'
import Sidebar from './SidebarLeft'
import ChatSection from './ChatSection'
import UserProfileSidebar from './UserProfileSidebar'
import axios from 'axios'
import { SocketContext } from '../../../service/socket'

import './chatStyle.css'

import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'

const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const AppChat = () => {
  
  const socket = useContext(SocketContext);

  const [filteredChat, setFilterChat] = useState({})
  const [chats, setChats] = useState([])
  const [show , setShow]= useState(true)

  const [data, setData] = useState({
    chats: [],
    filteredChat: {}
  }, {})

  useEffect(() => {
    socket.on('newMessageFromClient', (updatedChat) => {
      setData(prevData => {
        for (let i = 0; i < prevData.chats.length; i++) {
          if (JSON.stringify(prevData.chats[i]._id) == JSON.stringify(updatedChat._id)) {
            prevData.chats.splice(i, 1)
            prevData.chats.unshift(updatedChat)
            //localStorage.setItem("cachedChats", JSON.stringify(prevChat))
            return {
              chats: prevData.chats,
              filteredChat: (JSON.stringify(prevData.filteredChat._id) != JSON.stringify(updatedChat._id)) ? prevData.filteredChat : prevData.chats[0]
            }
          } 
        }
        if(user.role == 'SUPER_ADMIN') {
          prevData.chats.unshift(updatedChat);
        }
        return {
          chats: prevData.chats,
          filteredChat: (JSON.stringify(prevData.filteredChat._id) != JSON.stringify(updatedChat._id)) ? prevData.filteredChat : prevData.chats[0]
        }
      })
    });

    socket.on('sendNewMessageToClient', (updatedChat) => {

      setData(prevData => {
        for (let i = 0; i < prevData.chats.length; i++) {
          if (JSON.stringify(prevData.chats[i]._id) == JSON.stringify(updatedChat._id)) {
            prevData.chats.splice(i, 1)
            prevData.chats.unshift(updatedChat)
            //localStorage.setItem("cachedChats", JSON.stringify(prevChats))
            return {
              chats: prevData.chats,
              filteredChat: updatedChat
            }
          } 
        }
      })
    })

  }, [socket, setData])
  

  
  const renderChats = async () => {
   
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    if (user && token) {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}`
      const options = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
  
      try {
        const response = await axios.get(endPoint, options)
        if (response.status === 200) {
          const chats = response.data.data.chats
          //localStorage.setItem("cachedChats", JSON.stringify(chats))
          setData({chats: chats, filteredChat: chats[0]})        
        } 
      } catch (e) {
        
      }
    }
  }

  useEffect(async () => {
    renderChats()
  }, [])




  async function renderChat(chatId) {
    for (let i = 0; i < data.chats.length; i++) {
      if (JSON.stringify(data.chats[i]._id) == JSON.stringify(chatId)) {
        // WE NEED TO MAKE API CALL HERE TO BE ABLE TO SET CHAT_UNREAD_MESSAGES_COUNT = 0
        if(data.chats[i].unReadMessages > 0){
          data.chats[i].unReadMessages = 0 
          const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
          const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
          const entity = 'chat'
          const endPoint = `${baseUrl}/${apiVersion}/${entity}/reset_unread_messages`
          const options = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        try {
          console.log("try1");
          const response = await axios.post(endPoint,{chatId}, options)
          console.log("try2");
          if (response.status === 200) {
            console.log("updated unread messages");
          } 
      } catch (e) {
        console.log("Catch");
        console.log(e.response);
      }
        }
        setData(prevData => {
          return {
            chats: data.chats,
            filteredChat: data.chats[i] 
          }
        })
      } 
    }
  } 

  async function sendMessage(chatId, message) {
    
    if (user && token) {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/message`
      const options = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
  
      try {
        const response = await axios.post(endPoint, {message, chatId}, options)
        if (response.status === 200) {
          //renderChat(chatId)
          let newMessage = response.data.data.newMessage

          setData(prevData => {
            for (let i = 0; i < prevData.chats.length; i++) {
              if (JSON.stringify(prevData.chats[i]._id) == JSON.stringify(chatId)) {
                prevData.chats[i].messages.push(newMessage)
                // eslint-disable-next-line no-undef
                prevData.chats.unshift(prevChat[i])
                prevData.chats.splice(i, 1)
              } 
            }
            return {
              chats: prevData.chats,
              filteredChat: chats[0]
            }
          }) 
        }
      } catch (e) {
        
      }
    }

  }

  return (
    <div className="chat_container">
      <h1 onClick={() => setShow(!show)}>Chat</h1>
      <div className="chat">
        {show? (
          <>
  
   {
         data.chats && data.chats.length > 0 && <Sidebar renderChatParent = {renderChat} chats = {data.chats}/>
       }
 
 
 </>
        ) : ('')}
       
         
        {
         data.chats && data.chats.length > 0 && <ChatSection sendMessageParent = {sendMessage} chat = {data.filteredChat} />
       }
 
    
     </div>
     </div>
   )
 }
 

export default AppChat
