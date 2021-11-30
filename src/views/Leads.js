import { useState, useEffect, useContext } from "react";
import Cards from "../views/components/cards/LeadsCard";
import LeadsTable from "../views/components/TablesAndForms/LeadsTable";
import axios from "axios";
import { SocketContext } from "../service/socket";
import { useHistory } from "react-router-dom";

const Leads = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (!token) {
    history.push("/login");
  }
  const socket = useContext(SocketContext);
  const [isUpdated, setIsUpdated] = useState(false);
  const [leadsData, setleadsData] = useState({});
  const [onlineUsers, setOnlineUser] = useState(0);

  useEffect(() => {
    socket.emit("getConnectedUsers");

    socket.on("returnConnectedUsers", (data) => {
      setOnlineUser(data);
    });

    socket.on("connectedUsers", (data) => {
      setOnlineUser(data);
    });
  }, [socket, setOnlineUser]);
  //fetch token from localStorage
  useEffect(() => {
    const fetchDashboard = async () => {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL;
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION;
      const entity = "lead";
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/`;
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(endPoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setleadsData(response.data);
      } catch (e) {
        if (e && e?.response && e?.response?.status === 400) {
        }
      }
    };
    fetchDashboard();
  }, [axios, setleadsData, isUpdated]);
  const changeStatus = async (chatId, status) => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL;
    const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION;
    const entity = "chat";
    const endPoint = `${baseUrl}/${apiVersion}/${entity}/status-update`;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        endPoint,
        { chatId, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsUpdated(!isUpdated);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="p-2 bg-white mt-1">
      <h2 className="m-2">
        <strong>Leads Overview</strong>
      </h2>
      <div className="mt-2">
        <Cards
          leadsData={{
            total: leadsData?.data?.totalLeads,
            respondedLeads: leadsData?.data?.respondedLeads,
            unAssignedLeads: leadsData?.data?.unAssignedLeads,
          }}
          onlineUsers={onlineUsers}
        />
      </div>

      <LeadsTable
        summary={leadsData?.data?.summary}
        changeStatus={changeStatus}
      />
    </div>
  );
};

export default Leads;
