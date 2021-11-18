import { lazy } from 'react'
const isLoggedIn = () => {
  const token  = localStorage.getItem('token');
   if(token){
     return true;
   } else {
     return false;
   }
}
const AppRoutes = [
 
  {
    path: '/apps/chat',
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat')),
    render : () => {
      return isLoggedIn() ? <Redirect to='/apps/chat'/> : <Redirect to='/login'/>
    }
  },{
    path: '/apps/chat/messages',
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat/ChatSection'))
  }
  
  
  
]

export default AppRoutes
