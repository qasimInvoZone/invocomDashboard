import React from 'react'
import AnalyticalCardTransactions from '../cards/AnalyticalCardTransactions'
import UserTimeline from '../cards/AnalyticalUserTimeline'
import AnalyticalReportCard from '../cards/AnalyticalReportCard'
import { Row, Col } from 'reactstrap'
import AnalyticalCardTab from '../tabs/AnalyticalCardTab'
const AnalyticalCardHolder = () => {
    return (
        <div>
             <Row>
        <Col md='6' xl='4'>
        <UserTimeline />
        </Col>
        <Col md='6' xl='4'>
          
         <AnalyticalCardTab />
        </Col>
        <Col md='6' xl='4'>
         
        <AnalyticalCardTransactions />
        </Col>
        
      </Row>
        </div>
    )
}

export default AnalyticalCardHolder
