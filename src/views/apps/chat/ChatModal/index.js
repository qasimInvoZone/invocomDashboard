import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input,UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import axios from 'axios'
const ModalForm = (props) => {
  const [formModal, setFormModal] = useState(true)
  const [assignee, setAssignee] = useState({})
  const [isAssignee, setIsAssignee] = useState(false)
  const assignChat = async () => {
    const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
      const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/assign`
      const token = localStorage.getItem('token');
      const adminId = assignee._id;
      const chatId = props.chatId;
      console.log("admin, chat",adminId, chatId);
      try {
        const response = await axios.post(endPoint,{adminId,chatId},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log("rres", response);
        if(response.status == 200){
          console.log("status",response.status);
          setIsAssignee(true);
          setFormModal(!formModal);
        }
      } catch (e) {
        console.log('CATCH', e.response);
        if (e && e?.response && e?.response?.status === 400) {
          console.log(e.response.data)
        }
      }
    
  }
  const renderAdmins = (admins) => {
    console.log("ADIMINSSSSSSS", admins)
    return admins.map((admin)=>{
      console.log(admin);
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