import { lazy } from 'react'

const AppRoutes = [
 
  {
    path: '/apps/chat',
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },{
    path: '/apps/chat/messages',
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat/ChatSection'))
  }
  
  
  
]

export default AppRoutes
