
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import React, { useState } from 'react'
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

const TableHover = (props) => {
  const [status, setStatus] = useState('OPEN');
  const [filterStatus, setFilterStatus] = useState('OPEN');
  const [isStatusUpdate, setIsStatusUpdate] = useState(false);
  const renderSummary = (leadsData) => {
    console.log("leads Data ::::::: ",leadsData);
    let result = leadsData;
    if(status == "OPEN"){
      result = leadsData;
    } else {
      result = leadsData.filter(leadStatus => leadStatus.STATUS == filterStatus);
    }
    return result?.map((lead)=>{
      return <tr>
      <td>
        <span className='align-middle font-weight-bold'>{lead.client._id}</span>
      </td>
      <td>{lead.client.fullname}</td>
      <td>
      {lead.client.email}
      </td>
      <td>
      {lead.assignee.fullname}
      </td>
      <td>
        <p style={{fontWeight: 'bold'}}>{moment(lead.meeting.startDate).toString()}</p>
        <p style={{color: 'gray'}}></p>
      
      </td>

      <td>
      {
          lead.STATUS === "ASSIGNED" ? (
<Badge className='mr-1 active_status'>
        Assigned
        </Badge>
          ) : (
            <Badge className='mr-1 pending_status'>
        Pending
        </Badge>
          )
        }
      </td>
      <td>
      <div>
          <UncontrolledDropdown>
          <DropdownToggle className='cursor-pointer' tag='span'>
            <MoreVertical size={14} />
          </DropdownToggle>
          <DropdownMenu right>
          <DropdownItem className='w-100 leads_dropdown_items' onClick={()=>{setStatus('OPEN');changeStatus()}}>
            Open
          </DropdownItem>
          <DropdownItem className='w-100 leads_dropdown_items'  onClick={()=>{setStatus("ASSIGNED");changeStatus()}}>
            Assigned
          </DropdownItem>
          <DropdownItem className='w-100 leads_dropdown_items'  onClick={()=>{setStatus("PENDING");changeStatus()}}>  
            Pending
          </DropdownItem>
          <DropdownItem className='w-100 leads_dropdown_items'  onClick={()=>{setStatus("CLOSED");changeStatus()}}>  
            Closed
          </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
          </div>
      </td>
    </tr>
    })
  }
  const changeStatus = async () => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/status-update`
      const token = localStorage.getItem('token');
      const chatId = '';
      try {
        const response = await axios.post(endPoint,{chatId,status},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setIsStatusUpdate(true);
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (

    <div className="complete_table">
      <div className="table-header">
          <h3>Leads summary</h3>

          <div>
          <UncontrolledDropdown>
          <DropdownToggle className='cursor-pointer' tag='span'>
            <MoreVertical size={14} />
          </DropdownToggle>
          <DropdownMenu right>
          <DropdownItem className='w-100 leads_dropdown_items' onClick={()=>{setFilterStatus('OPEN')}}>
            Open
          </DropdownItem>
          <DropdownItem className='w-100 leads_dropdown_items'  onClick={()=>{setFilterStatus("ASSIGNED")}}>
            Assigned
          </DropdownItem>
          <DropdownItem className='w-100 leads_dropdown_items'  onClick={()=>{setFilterStatus("PENDING")}}>  
            Pending
          </DropdownItem>
          <DropdownItem className='w-100 leads_dropdown_items'  onClick={()=>{setFilterStatus("CLOSED")}}>  
            Closed
          </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
          </div>
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {renderSummary(props?.summary)}
      </tbody>
    </Table>
      
    </div>
  )
}

export default TableHover