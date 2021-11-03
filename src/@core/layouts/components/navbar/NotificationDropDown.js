// ** React Imports
import { Fragment, useState, useEffect, useContext, useRef } from 'react'

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
            <a key={index} className='d-flex' href={item.type == 'MESSAGE' ? '/apps/chat': '/meetings'}>
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
            </a>
          )
        })}
        </div>
        
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */

  return (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
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
            Read all notifications
          </Button.Ripple>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NotificationDropdown
