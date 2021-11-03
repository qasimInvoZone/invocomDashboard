import { MessageCircle, Users, PieChart, Settings, ArrowUp, Circle } from 'react-feather'
import Dashboardicon from '../../assets/images/icons/customIcons/dashboard2.svg'
import ChatHistory from '../../assets/images/icons/customIcons/chathistory.svg'
import Leads from '../../assets/images/icons/customIcons/leadership.svg'
import meeting from '../../assets/images/icons/customIcons/meeting.svg'
import analytics from '../../assets/images/icons/customIcons/analytics.svg'
import settings from '../../assets/images/icons/customIcons/settings.svg'
export default [
  {
    id: 'Dashboard',
    title: 'Dashboard',
     icon: <img  src={Dashboardicon} style={{marginRight: '15px'}}/>,
    permissions: ['admin', 'editor'],
    navLink: '/home',
    collapsed: true
  },
   
      {
        id: 'Chat History',
        title: 'Chat History',
        icon: <img  src={ChatHistory} style={{marginRight: '15px'}}/>,
        permissions: ['admin', 'editor'],
        navLink: '/apps/chat',
        collapsed: true
      },
      {
        id: 'Leads',
        title: 'Leads',
        icon: <img  src={Leads} style={{marginRight: '15px', color: 'grey'}}/>,
        permissions: ['admin', 'editor'],
        navLink: '/leads'
      },
      {
        id: 'Meetings',
        title: 'Meetings',
        icon: <img  src={meeting} style={{marginRight: '15px'}}/>,
        permissions: ['admin', 'editor'],
        navLink: '/meetings'
      },
      // {
      //   id: 'Analytics',
      //   title: 'Analytics',
      //   icon: <img  src={analytics} style={{marginRight: '15px'}}/>,
      //   permissions: ['admin', 'editor'],
      //   navLink: '/analytics'
      // },
      {
        id: 'Setting',
        title: 'Setting',
        icon: <img  src={settings} style={{marginRight: '15px'}}/>,
        permissions: ['admin', 'editor'],
        navLink: '/setting'
      }
 
  
]
