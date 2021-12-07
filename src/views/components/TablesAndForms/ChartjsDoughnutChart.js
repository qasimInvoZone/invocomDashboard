import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import React, { useState } from "react";
// eslint-disable-next-line no-duplicate-imports
import { Table } from "reactstrap";
const ChartjsRadarChart = (props) => {
  const renderChats = (admins) => {
    return admins.map((adminUser) => {
      let chats = adminUser.chats;
      const Visitors = chats.map((chat) => {
        return (
          <span className="badge badge-info mr-1 mb-1">
            {chat.client.fullname}
          </span>
        );
      });
      return (
        <>
          <tr>
            <td style={{ maxHeight: "40px" }}>{Visitors}</td>
            <td>
              <span>{adminUser.admin.fullname}</span>
            </td>
            <td>
              <span>{adminUser.chats.length}</span>
            </td>
          </tr>
        </>
      );
    });
  };
  return (
    <Card>
      <CardHeader className="d-flex justify-content-start align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle className="summary_heading">Chat History</CardTitle>
      </CardHeader>
      <CardBody>
        <Table borderless responsive>
          <thead>
            <tr>
              <th>Clients</th>
              <th>Admins</th>
              <th>Chats</th>
            </tr>
          </thead>
          <tbody>{renderChats(props.admins)}</tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ChartjsRadarChart;
