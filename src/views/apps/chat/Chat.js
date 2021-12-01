
import { RefreshCw, Delete } from 'react-feather'
import User1 from '../../../assets/images/avatars/12-small.png'
const ChatLog = () => {

  return (
    <div>
   
    <div className="headRight-section">
    <div className="headRight-sub">
      <div className="image_name_header">
      <img src={User1}/>
    <h3>Lajy Ion</h3>
    </div>
    <div className="chat_head_right_icons">
      <RefreshCw size={16}/>
      <Delete size={16}/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ChatLog
