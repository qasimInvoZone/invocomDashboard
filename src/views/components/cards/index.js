import { Fragment, useContext, useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import Leads from "../../../assets/images/icons/customIcons/leads.svg";
import chat from "../../../assets/images/icons/customIcons/chathistory.svg";
import meeting from "../../../assets/images/icons/customIcons/meeting.svg";
import loggedin from "../../../assets/images/icons/customIcons/user-loggedin.svg";
import { ThemeColors } from "@src/utility/context/ThemeColors";
import axios from "axios";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const context = useContext(ThemeColors);

  return (
    <Fragment>
      <Row>
        <Col sm="6" xl="3" md="6">
          <Link to="/leads">
            <Card className="card">
              <CardHeader>
                <CardTitle className="card_header">
                  <div className="icon_container">
                    <img src={Leads} alt="" />
                  </div>
                  <h5> Total Leads </h5>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>
                  <div className="card_body">
                    <h3>{props.leadsData.total}</h3>
                    <div className="body_icon">^</div>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </Col>

        <Col sm="6" xl="3" md="6">
          <Link to="/meetings">
            <Card className="card">
              <CardHeader>
                <CardTitle className="card_header">
                  <div className="icon_container_3">
                    <img src={meeting} alt="" />
                  </div>
                  <h5> Total Meetings </h5>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>
                  <div className="card_body">
                    <h3>{props.meetingsData.total}</h3>
                    <div className="body_icon">^</div>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </Col>

        <Col sm="6" xl="3" md="6">
          <Link to="/apps/chat">
            <Card className="card">
              <CardHeader>
                <CardTitle className="card_header">
                  <div className="icon_container_2">
                    <img src={chat} alt="" />
                  </div>
                  <h5>Total Chats</h5>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>
                  <div className="card_body">
                    <h3>{props.chatsData.total}</h3>
                    <div className="body_icon_2">^</div>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </Col>

        <Col sm="6" xl="3" md="6">
          <Card className="card">
            <CardHeader>
              <CardTitle className="card_header">
                <div className="icon_container_4">
                  <img src={loggedin} alt="" />
                </div>
                <h5> User Loged in </h5>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                <div className="card_body">
                  <h3>{props.onlineUsers}</h3>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Cards;
