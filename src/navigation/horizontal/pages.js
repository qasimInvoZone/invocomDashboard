import { MessageCircle, Users, PieChart, Settings, ArrowUp, Circle } from 'react-feather'
import Dashboardicon from '../../assets/images/icons/customIcons/dashboard.svg'
export default [
  {
    id: 'Dashboard',
    title: 'Dashboard',
    icon: <Dashboardicon size={12} color={'grey'}  />,
    permissions: ['admin', 'editor'],
    navLink: '/home',
    collapsed: true
  },
   
      {
        id: 'Chat History',
        title: 'Chat History',
        icon: <MessageCircle size={12} color={'grey'} />,
        permissions: ['admin', 'editor'],
        navLink: 'apps/chat',
        collapsed: true
      },
      {
        id: 'Leads',
        title: 'Leads',
        icon: <ArrowUp size={12} color={'grey'} />,
        permissions: ['admin', 'editor'],
        navLink: '/leads'
      },
      {
        id: 'Meetings',
        title: 'Meetings',
        icon: <Users size={12} color={'grey'}/>,
        permissions: ['admin', 'editor'],
        navLink: '/meetings'
      },
      {
        id: 'Analytics',
        title: 'Analytics',
        icon: <PieChart size={12} color={'grey'}/>,
        permissions: ['admin', 'editor'],
        navLink: '/analytics'
      },
      {
        id: 'Setting',
        title: 'Setting',
        icon: <Settings size={12} color={'grey'}/>,
        permissions: ['admin', 'editor'],
        navLink: '/setting'
      }
 
  
]
