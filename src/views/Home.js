import { useState, useEffect, useContext } from "react";
import Cards from "../views/components/cards";
import Chart from "./components/charts/ChartjsBarChart";
import PieChart from "../views/components/TablesAndForms/ChartjsDoughnutChart";
import DashboardStats from "./components/Stats/DashboardStats";
import axios from "axios";
import { SocketContext } from "../service/socket";
import { useHistory } from "react-router-dom";
const Home = () => {
  const [admins, setAdmins] = useState([]);
  const [user, setUser] = useState({});
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (!token) {
    history.push("/login");
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [setUser]);
  const socket = useContext(SocketContext);

  const [leadsData, setleadsData] = useState({});
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [onlineUsers, setOnlineUser] = useState(0);
  const [chatsData, setchatsData] = useState({});
  const [meetingsData, setmeetingsData] = useState({});

  useEffect(() => {
    socket.emit("getConnectedUsers");

    socket.on("returnConnectedUsers", (data) => {
      setOnlineUser(data);
    });

    socket.on("connectedUsers", (data) => {
      setOnlineUser(data);
    });
  }, [socket, setOnlineUser]);

  useEffect(() => {
    const fetchDashboard = async () => {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL;
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION;
      const entity = "dashboard";
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/`;
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(endPoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setleadsData(response.data);
        setchatsData(response.data);
        setmeetingsData(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDashboard();

    const fetchAdmins = async () => {
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL;
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION;
      const entity = "user";
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/admin-users`;
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(endPoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        if (response.status == 200) {
          setAdmins(response.data.adminUsers);
        }
      } catch (e) {
        if (e && e?.response && e?.response?.status === 400) {
          console.log(e);
        }
      }
    };
    fetchAdmins();

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUsername(user.username);
      setRole(user.role);
    }
  }, [axios, setleadsData]);

  return (
    <div>
      <div className="welcome_note">
        <h2>Hi, {username}</h2>
        <h5>Here's whats happening in your account</h5>
      </div>
      <Cards
        leadsData={{
          total: leadsData?.data?.totalLeads,
        }}
        chatsData={{
          total: chatsData?.data?.totalChats,
        }}
        meetingsData={{
          total: meetingsData?.data?.totalMeetings,
        }}
        onlineUsers={onlineUsers}
      />

      <div className="chart_container">
        <div className="chart_home">
          <Chart
            leadsData={{
              total: leadsData?.data?.totalLeads,
              respondedLeads: leadsData?.data?.respondedLeads,
              unAssignedLeads: leadsData?.data?.unAssignedLeads,
            }}
          />
        </div>
        <div className="pie_chart">
          {user?.role === "SUPER_ADMIN" ? <PieChart admins={admins} /> : ""}
        </div>
      </div>
      <DashboardStats
        leadsStats={{ averageRespondTime: leadsData?.data?.averageRespondTime }}
      />
    </div>
  );
};

export default Home;
