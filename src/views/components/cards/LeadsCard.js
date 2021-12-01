import { Fragment } from "react";
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
import respond from "../../../assets/images/icons/customIcons/respondedLeads.svg";
import unassigned from "../../../assets/images/icons/customIcons/un-assignedLeads.svg";

const Cards = (props) => {
  return (
    <Fragment>
      <Row>
        <Col sm="4" xl="4" md="4">
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
        </Col>

        <Col sm="4" xl="4" md="4">
          <Card className="card">
            <CardHeader>
              <CardTitle className="card_header">
                <div className="icon_container_2">
                  <img src={respond} alt="" />
                </div>
                <h5>Responded Leads</h5>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                <div className="card_body">
                  <h3>{props.leadsData.respondedLeads}</h3>
                  <div className="body_icon_2">^</div>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4" xl="4" md="4">
          <Card className="card">
            <CardHeader>
              <CardTitle className="card_header">
                <div className="icon_container_3">
                  <img src={unassigned} alt="" />
                </div>
                <h5> Un-Assigned Leads </h5>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                <div className="card_body">
                  <h3>{props.leadsData.unAssignedLeads}</h3>
                  <div className="body_icon">^</div>
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
