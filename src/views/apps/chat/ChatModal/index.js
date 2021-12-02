import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
} from "reactstrap";
import axios from "axios";
const ModalForm = (props) => {
  const [formModal, setFormModal] = useState(true);
  const [assignee, setAssignee] = useState("");
  const [isAssignee, setIsAssignee] = useState(false);
  const [user, setUser] = useState({});
  const assignChat = async () => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL;
    const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION;
    const entity = "chat";
    const endPoint = `${baseUrl}/${apiVersion}/${entity}/assign`;
    const token = localStorage.getItem("token");
    const adminId = assignee;
    const chatId = props.chatId;
    try {
      const response = await axios.post(
        endPoint,
        { adminId, chatId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
        setIsAssignee(true);
        setFormModal(!formModal);
        window.location.reload();
      }
    } catch (e) {
      if (e && e?.response && e?.response?.status === 400) {
      }
    }
  };
  const renderAdmins = (admins) => {
    return admins.map((admin) => {
      return <option value={admin._id}>{admin.email}</option>;
    });
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [setUser]);
  return (
    <div className="demo-inline-spacing">
      {user?.role === "ADMIN" || user?.role === "SUPER_ADMIN" ? (
        <Modal
          isOpen={formModal}
          toggle={() => setFormModal(!formModal)}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={() => setFormModal(!formModal)}></ModalHeader>
          <ModalBody>
            <h2>Assign the conversation</h2>
            <FormGroup>
              <Label for="email">Email:</Label>
              <div className="notification-dropdown-chatHistory">
                <select onChange={(event) => setAssignee(event.target.value)}>
                  <option value="">Select Admin</option>
                  {renderAdmins(props.admins)}
                </select>
              </div>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={() => assignChat()}>
              Assign
            </Button>

            <Button
              className="close_button"
              color="primary"
              onClick={() => setFormModal(!formModal)}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      ) : (
        ""
      )}
      {/* {renderAdmins(props.admins)} */}
    </div>
  );
};
export default ModalForm;
