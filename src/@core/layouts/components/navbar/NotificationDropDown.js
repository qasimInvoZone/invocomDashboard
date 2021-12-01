// ** React Imports
import { Fragment, useState, useEffect, useContext, useRef } from 'react'
import {useHistory, Link} from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { MessageSquare } from 'react-feather'
import {
  Button,
  Badge,
  Media,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import Notification from '../../../../assets/images/icons/customIcons/notification.svg'
import { SocketContext } from '../../../../service/socket'
import { USERWHITESPACABLE_TYPES } from '@babel/types'

const NotificationDropdown = () => {
  const history = useHistory();
  // ** Notification Array
  const socket = useContext(SocketContext);
  const [notifications, setNotifications] = useState([])
  const [notificationCount, setNotificationCount] = useState(0)

  useEffect(() => {
    socket.on('Notification', (data) => {
      const myAudio = new Audio()
      myAudio.src = 'notification.ogg'
      myAudio.play();
      setNotifications(prevNotification => {
        return [...prevNotification, data]
      });
      setNotificationCount(prevNotificationCount => {
        return prevNotificationCount + 1
      })

    })
  }, [socket])
  
  // ** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        <div>
          {notifications?.length > 0 && notifications.map((item, index) => {
          return (
            <div key={index} className='d-flex' onClick={() => removeNotification(index,item)}>
              <Media
                className={classnames('d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
              <Fragment>     
                <Media body>
                  {item?.type}
                  <small className='notification-text'>{item?.text}</small>
                 
                </Media>
              </Fragment>
              </Media>
            </div>
          )
        })}
        </div>
        
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */
  const removeNotification = (index,item) => {
    // delete element of index 
    if (index > -1) {
      const notificationArray = notifications;
      notificationArray.splice(index, 1);
      setNotifications(notificationArray);
      setNotificationCount(notificationCount-1);
      item.type == 'MESSAGE' ? history.push('/apps/chat'): history.push('/meetings');
    }
  }

  return (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' onClick={e => e.preventDefault()}>
        <div className="header_icons">
        <img src={Notification} alt=""/>
        <Badge pill color='danger' className='badge-up'>
          {notificationCount}
        </Badge>
        </div>
      </DropdownToggle>
      <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <h4 className='notification-title mb-0 mr-auto'>Notifications</h4>

          </DropdownItem>
        </li>
        {renderNotificationItems()}
        <li className='dropdown-menu-footer'>
          <Button.Ripple color='primary' block onClick={()=>{setNotificationCount(0); setNotifications([])}}>
            Mark Read All Notifications
          </Button.Ripple>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NotificationDropdown
