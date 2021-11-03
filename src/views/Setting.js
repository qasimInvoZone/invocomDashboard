
import React, { Fragment } from 'react'
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MessageCircle, User, Bell,Users, Edit2,MessageSquare } from 'react-feather'
import {Tab, Nav} from 'react-bootstrap'
import ArrowBottom from '../assets/images/icons/customIcons/arrowbottom.svg'
import Button from 'reactstrap/lib/Button'
import LiveChat from '../views/components/LiveChat/LiveChat'
import Accounts from '../views/components/Accounts-setting/Accounts'
import Notification from '../views/components/Notification-setting/Notification'
import Admin from '../views/components/Admin-setting/Admin'
const Setting = () => {
    return (
        <div className="settings">

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="setting_row" >
    <Col sm={3}>
    <div className="leftbar">
      <Nav variant="pills" className="flex-column setting-nav">
      <p>Channel</p>
        <Nav.Item className="nav-item-wrapper">
          <Nav.Link className="nav-link-wrapper" eventKey="first">
              <div className="setting_live_chat">
                <MessageCircle />
                    Live Chat
                </div>
            </Nav.Link>
        </Nav.Item>
        <p className="personal-wrapper">personal</p>
        <Nav.Item className="nav-item-wrapper">
          <Nav.Link className="nav-link-wrapper" eventKey="second">
          <div className="setting_live_chat">
                                <User />
                                Accounts
                            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item-wrapper">
          {/* <Nav.Link className="nav-link-wrapper" eventKey="third">
          <div className="setting_live_chat">
                                <Bell />
                                Notifications
                            </div>
          </Nav.Link> */}
        </Nav.Item>
        <p className="personal-wrapper">General</p>
        <Nav.Item className="nav-item-wrapper">
          <Nav.Link className="nav-link-wrapper" eventKey="fourth">
          <div className="setting_live_chat">
                                <Users />
                                Admin
                            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
                <LiveChat />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
                <Accounts />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
                <Notification />
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
                <Admin />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </div>
    )
}

export default Setting
