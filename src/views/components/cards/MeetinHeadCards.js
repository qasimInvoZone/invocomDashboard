import { Fragment, useContext } from 'react'
import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import Leads from '../../../assets/images/icons/customIcons/leads.svg'
import respond from '../../../assets/images/icons/customIcons/respondedLeads.svg'
import unassigned from '../../../assets/images/icons/customIcons/un-assignedLeads.svg'
import loggedin from '../../../assets/images/icons/customIcons/user-loggedin.svg'
import { ThemeColors } from '@src/utility/context/ThemeColors'

const MeetingHeadCards = (props) => {
  const context = useContext(ThemeColors)
  return (
    <Fragment>
      
      <Row>
        <Col sm='6' xl='3' md='6' >
        <Card className="card">
        <CardHeader>
          
          <CardTitle  className="card_header">
            <div className="icon_container"><img src={Leads} alt="" /></div>
            <h5> Total Meetings </h5>
            </CardTitle>
          
        </CardHeader>
        <CardBody>
          <CardText>
          <div className="card_body">    
          <h3>{props.meetingData.totalMeetings}</h3> 
          <div className="body_icon">
          ^
          </div>
          <p>(+12 %)</p>
          </div>
          </CardText>
        </CardBody>
      </Card>
        </Col>
      
        <Col sm='6' xl='3' md='6'>
        <Card className="card">
        <CardHeader>
          
          <CardTitle  className="card_header">
            <div className="icon_container_2"><img src={respond} alt="" /></div>
            <h5> Attended Meeting </h5>
            </CardTitle>
          
        </CardHeader>
        <CardBody>
          <CardText>
          <div className="card_body">    
          <h3>{props.meetingData.attendedMeetings}</h3> 
          <div className="body_icon_2">
          ^
          </div>
          <p>(-4 %)</p>
          </div>
          </CardText>
        </CardBody>
      </Card>
        </Col>
       
        <Col sm='6' xl='3' md='6'>
        <Card className="card">
        <CardHeader>
          
          <CardTitle  className="card_header">
            <div className="icon_container_3"><img src={unassigned} alt="" /></div>
            <h5> Un-Attended Meeting </h5>
            </CardTitle>
          
        </CardHeader>
        <CardBody>
          <CardText>
          <div className="card_body">    
          <h3>{props.meetingData.unAttendedMeetings}</h3> 
          <div className="body_icon">
          ^
          </div>
          <p>(+3 %)</p>
          </div>
          </CardText>
        </CardBody>
      </Card>
        </Col>
        

        <Col sm='6' xl='3' md='6'>
        <Card className="card">
        <CardHeader>
          
          <CardTitle  className="card_header">
            <div className="icon_container_4"><img src={loggedin} alt="" /></div>
            <h5> Cancelled Meeting </h5>
            </CardTitle>
          
        </CardHeader>
        <CardBody>
          <CardText>
          <div className="card_body">    
          <h3>{props.meetingData.cancelledMeetings}</h3> 
          <div className="body_icon">
          ^
          </div>
          <p>(+3 %)</p>
          </div>
          </CardText>
        </CardBody>
      </Card>
        </Col>
      </Row>

    </Fragment>
  )
}

export default MeetingHeadCards
