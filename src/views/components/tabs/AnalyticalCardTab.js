/* eslint-disable no-duplicate-imports */
import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import AnalyticalReportCard from '../cards/AnalyticalReportCard'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const TabsFilled = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <React.Fragment>
          <Card className='card-transaction' style={{height:"550px"}}>
      <CardHeader>
        <CardTitle className="ml-2 m-1" tag='h4'>
        Assignee Report
      </CardTitle>

      <Nav tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Last 6 Months
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            This Week
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Today
          </NavLink>
        </NavItem>
      </Nav>
      </CardHeader>
      <CardBody style={{height: '350px'}}>
          <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <AnalyticalReportCard />
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Bear claw jelly beans wafer pastry jelly beans candy macaroon biscuit topping. Sesame snaps lemon drops
            donut gingerbread dessert cotton candy wafer croissant jelly beans. Sweet roll halvah gingerbread bonbon
            apple pie gummies chocolate bar pastry gummi bears.
          </p>
          <p>
            Croissant danish chocolate bar pie muffin. Gummi bears marshmallow chocolate bar bear claw. Fruitcake halvah
            chupa chups dragée carrot cake cookie. Carrot cake oat cake cake chocolate bar cheesecake. Wafer gingerbread
            sweet roll candy chocolate bar gingerbread.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Croissant jelly tootsie roll candy canes. Donut sugar plum jujubes sweet roll chocolate cake wafer. Tart
            caramels jujubes. Dragée tart oat cake. Fruitcake cheesecake danish. Danish topping candy jujubes. Candy
            canes candy canes lemon drops caramels tiramisu chocolate bar pie.
          </p>
          <p>
            Gummi bears tootsie roll cake wafer. Gummies powder apple pie bear claw. Caramels bear claw fruitcake
            topping lemon drops. Carrot cake macaroon ice cream liquorice donut soufflé. Gummi bears carrot cake toffee
            bonbon gingerbread lemon drops chocolate cake.
          </p>
        </TabPane>
        
      </TabContent></CardBody>
    </Card>
      
    
    </React.Fragment>
  )
}
export default TabsFilled