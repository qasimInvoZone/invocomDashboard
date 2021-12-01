import { useState, useEffect, useContext } from 'react'
import Cards from '../views/components/cards'
import Chart from './components/charts/ChartjsBarChart'
import PieChart from '../views/components/TablesAndForms/ChartjsDoughnutChart'
import DashboardStats from './components/Stats/DashboardStats'
import axios from 'axios'
import { SocketContext } from '../service/socket' 
import { useHistory } from 'react-router-dom'
const Home = () => {
  const history = useHistory()
  const token = localStorage.getItem('token');
  if(!token){
    history.push('/login');
  }
  const socket = useContext(SocketContext);

  const [leadsData, setleadsData] = useState({});
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('')
  const [onlineUsers, setOnlineUser] = useState(0)

  useEffect(() => {
    socket.emit('getConnectedUsers');

    socket.on('returnConnectedUsers', (data) => {
      setOnlineUser(data);
    })

    socket.on('connectedUsers', (data) => {
      setOnlineUser(data)
    })

  }, [socket, setOnlineUser])
  useEffect(() => {

    const fetchDashboard = async () => {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'dashboard'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/`
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(endPoint, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setleadsData(response.data);
      } catch (e) {
        if (e) {
        }
      }
    }
    
    fetchDashboard()
    
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUsername(user.username)
      setRole(user.role)
    }

  }, [axios, setleadsData])

  return (
    <div>
      <div className="welcome_note">
        <h2>Hi, { username }</h2>
        <h5>Here's whats happening in your account</h5>
      </div>
        <Cards leadsData = {{total: leadsData?.data?.totalLeads, respondedLeads: leadsData?.data?.respondedLeads,unAssignedLeads: leadsData?.data?.unAssignedLeads}} onlineUsers={onlineUsers}/>
     
        <div className="chart_container">
            <div className="chart_home">
            <Chart leadsData = {{total: leadsData?.data?.totalLeads, respondedLeads: leadsData?.data?.respondedLeads,unAssignedLeads: leadsData?.data?.unAssignedLeads}} />
            </div>
            <div className="pie_chart">
            <PieChart />
            </div>
        </div>
        <DashboardStats leadsStats = {{averageRespondTime: leadsData?.data?.averageRespondTime}}/>
    </div>
  )
}

export default Home
