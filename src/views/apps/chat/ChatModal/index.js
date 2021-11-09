import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input,UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom';
const ModalForm = (props) => {
  const [formModal, setFormModal] = useState(true)
  const [assignee, setAssignee] = useState({})
  const [isAssignee, setIsAssignee] = useState(false)
  const history = useHistory();
  const location = useLocation();
  const assignChat = async () => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/assign`
      const token = localStorage.getItem('token');
      const adminId = assignee._id;
      const chatId = props.chatId;

      try {
        const response = await axios.post(endPoint,{adminId,chatId},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if(response.status == 200){

          setIsAssignee(true);
          setFormModal(!formModal);
          window.location.reload();
        }
      } catch (e) {

        if (e && e?.response && e?.response?.status === 400) {

        }
      }
    
  }
  const renderAdmins = (admins) => {
    return admins.map((admin)=>{
      return <div>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}></ModalHeader>
        <ModalBody>
          <h2>Assign the conversation</h2>
          <FormGroup>
            <Label for='email'>Email:</Label>
          <div className="notification-dropdown-chatHistory">
              <select onClick={()=>{setAssignee(admin)}}>
              <option>{admin.email}</option>
              </select>
              </div>
      
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          
              <Button  color='info' onClick={() => assignChat()}>
                Assign
              </Button>
              
              <Button className="close_button" color='primary' onClick={() => setFormModal(!formModal)}>
                Close
              </Button>
       
        </ModalFooter>
      </Modal>
    </div>
    })
  }
  return (
    <div className='demo-inline-spacing'>
      {renderAdmins(props.admins)}
     </div>
  )
}
export default ModalForm