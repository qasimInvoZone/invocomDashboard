import {useState, useEffect, useContext} from 'react'
import Cards from '../views/components/cards'
import ChartjsLine from '../views/components/charts/ChartjsLineChart' 
import LeadsTable from '../views/components/TablesAndForms/LeadsTable'
import axios from 'axios'
import { SocketContext } from '../service/socket' 


const Leads = () => {
  const socket = useContext(SocketContext);
  const [leadsData, setleadsData] = useState({});
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
  //fetch token from localStorage
  useEffect(() => {
    const fetchDashboard = async () => {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'lead'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/`
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(endPoint,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log("lead", response.data);
        setleadsData(response.data);
      } catch (e) {
        console.log("in dashboard catch");
        if (e && e?.response && e?.response?.status === 400) {
          console.log(e.response.data)
        }
      }
    }
    fetchDashboard()
  }, [axios, setleadsData])
  return (
    <div className="p-2 bg-white mt-1">
      <h2 className='m-2'><strong>Leads Overview</strong></h2>
     <div className='mt-2'>
        <Cards leadsData = {{total: leadsData?.data?.totalLeads, respondedLeads: leadsData?.data?.respondedLeads,unAssignedLeads: leadsData?.data?.unAssignedLeads}} onlineUsers={onlineUsers}/>
     </div>   
        {/* <ChartjsLine chartData = {{total: leadsData?.data?.openLeads, assigned: leadsData?.data?.assignedLeads,pending: leadsData?.data?.pendingLeads}}/> */}
        <LeadsTable summary= {leadsData?.data?.summary}/>
    </div>
  )
}

export default Leads
