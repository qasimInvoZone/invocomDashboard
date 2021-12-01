import {useState, useEffect } from 'react'
import MeetingHeadCards from './components/cards/MeetinHeadCards'
import MeetTable from './components/TablesAndForms/MeetingTable'
import MeetCardSwiper from './components/Swiper/MeetCardSwiper'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Meeting = () => {

  const history = useHistory()
  const token = localStorage.getItem('token');
  if(!token){
    history.push('/login');
  }

  const [meetingData, setMeetingData] = useState({});
  useEffect(() => {
    const fetchMeetings = async () => {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'meeting'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/`
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(endPoint,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setMeetingData(response.data);
      } catch (e) {
        if (e && e?.response && e?.response?.status === 400) {
        }
      }
    }
    fetchMeetings()
  }, [axios, setMeetingData])
  return (
    <div className="p-2 bg-white mt-1" >
    
    <h2 className='m-2'><strong>Meeting Overview</strong></h2>
    
     <div className='mt-2'>
        <MeetingHeadCards meetingData={{
          totalMeetings: meetingData?.data?.totalMeetings,
          attendedMeetings: meetingData?.data?.attendedMeetings,
          unAttendedMeetings: meetingData?.data?.unAttendedMeetings,
          cancelledMeetings: meetingData?.data?.cancelledMeetings}}/>
     </div>   
    <div className="meet_card_head"> 
     <h2 className='m-2'> <strong>Meeting Schedule</strong></h2>
     <div className="meet_card_head_right">
     
     </div>
    </div>
    <MeetCardSwiper meetingCard = {meetingData?.data?.meetings}/>
    <MeetTable meetingList = {meetingData?.data?.meetings}/>
    </div>
  )
}

export default Meeting
