
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
var moment = require('moment');
moment().format();

const avatarGroupData1 = [
  {
    title: 'Griffith',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Hu',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Felicia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Quinlan',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Patrick',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Castor',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Mohammad',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Isabella',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Michael',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Lavinia',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Nelle',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Virginia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const MeetTable = (props) => {
  const renderMeetings = (meetings) => {
    return meetings?.map((meeting)=>{
      return <tr>
      <td>
        <span className='align-middle font-weight-bold'>{meeting.summary.client._id}</span>
      </td>
      <td>{meeting.summary.client.fullname}</td>
      <td>
      {meeting.summary.client.email}
      </td>
      <td>
      {meeting.summary.assignee.fullname}
      </td>
      <td>
        <p style={{fontWeight: 'bold'}}>{moment(meeting.startDate).toString()}</p>
        <p style={{color: 'gray'}}></p>
      
      </td>
      <td>
      <Badge className='mr-1 active_status'>
      {meeting.summary.STATUS}
        </Badge>
      </td>
    </tr>
    })
  } 
  return (

    <div className="complete_table">
      <div className="table-header">
          <h3>Meeting History</h3>

          
      </div>
    <Table hover responsive>
      <thead>
        <tr>
          <th>ID NO#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Assignee</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {renderMeetings(props?.meetingList)}
        
      </tbody>
    </Table>
      
    </div>
  )
}

export default MeetTable