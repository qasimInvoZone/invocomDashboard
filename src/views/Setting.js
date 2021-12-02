import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { MessageCircle, User, Users } from "react-feather";
import { Tab, Nav } from "react-bootstrap";
import LiveChat from "../views/components/LiveChat/LiveChat";
import Accounts from "../views/components/Accounts-setting/Accounts";
import Notification from "../views/components/Notification-setting/Notification";
import Admin from "../views/components/Admin-setting/Admin";
import { useHistory } from "react-router-dom";
const Setting = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  if (!token) {
    history.push("/login");
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [setUser]);
  return (
    <div className="settings">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="setting_row">
          <Col sm={3}>
            <div className="leftbar">
              <Nav variant="pills" className="flex-column setting-nav">
                {user?.role === "SUPER_ADMIN" ? (
                  <>
                    <p>Channel</p>
                    <Nav.Item className="nav-item-wrapper">
                      <Nav.Link className="nav-link-wrapper" eventKey="first">
                        <div className="setting_live_chat">
                          <MessageCircle />
                          Live Chat
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </>
                ) : (
                  ""
                )}
                <p className="personal-wrapper">personal</p>
                <Nav.Item className="nav-item-wrapper">
                  <Nav.Link className="nav-link-wrapper" eventKey="second">
                    <div className="setting_live_chat">
                      <User />
                      Accounts
                    </div>
                  </Nav.Link>
                </Nav.Item>
                {user?.role === "SUPER_ADMIN" ? (
                  <>
                    <p className="personal-wrapper">General</p>
                    <Nav.Item className="nav-item-wrapper">
                      <Nav.Link className="nav-link-wrapper" eventKey="fourth">
                        <div className="setting_live_chat">
                          <Users />
                          Admin
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </>
                ) : (
                  ""
                )}
              </Nav>
            </div>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {user?.role === "SUPER_ADMIN" ? (
                <Tab.Pane eventKey="first">
                  <LiveChat />
                </Tab.Pane>
              ) : (
                ""
              )}
              <Tab.Pane eventKey="second">
                <Accounts />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="third">
                <Notification />
              </Tab.Pane> */}
              <Tab.Pane eventKey="fourth">
                <Admin />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Setting;
