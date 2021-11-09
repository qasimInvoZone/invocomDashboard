
import React, { Fragment,useState, useEffect } from 'react'
import {  Users,Trash2 } from 'react-feather'
import {Table,Modal,Button} from 'react-bootstrap'
import Plus from '../../../assets/images/icons/customIcons/plus.svg'
import Minus from '../../../assets/images/icons/customIcons/minus.svg'
import axios from 'axios'


const Admin = () => {



    const [show, setShow] = useState(false);
    const [showRemove, setShowRemove] = useState(false);
    const [email, setEmail] = useState('')
    const [removeEmail, setremoveEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [admins, setAdmins] = useState([])
    
    useEffect(() => {
      const fetchAdmins = async () => {
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
        const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
        const entity = 'user'
        const endPoint = `${baseUrl}/${apiVersion}/${entity}/admin`
        try {
          const response = await axios.get(endPoint,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setAdmins(response.data.adminUsers);
        } catch (e) {
        }
      }
      fetchAdmins()
    }, [axios, setAdmins]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseRemove = () => setShowRemove(false);
    const handleShowRemove = () => setShowRemove(true);

    
    //POST /api/v1/user/register/admin username,fullname,password,role=ADMIN, email
    const registerAdmin = async () => {
      const token = localStorage.getItem('token');      
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
            const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
            const entity = 'user'
            const role = 'ADMIN'
            const endPoint = `${baseUrl}/${apiVersion}/${entity}/register/admin`
            try {
                const response = await axios.post(endPoint, { username, fullname, email, role, password },{
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                })

                if (response.status === 200) {
                  setAdmins(prevAdmins => {
                    return [...prevAdmins, {username: response.data.data.user.username, email: response.data.data.user.email, _id: response.data.data.user._id}]
                  });
                }
            } catch (e) {

            }
    }
    const renderAdmin = () =>{
      return admins.map((admin)=>{
        return (
          <tr>
            <td className="table-div">{admin._id}</td>
            <td className="table-div">{admin.username}</td>
            <td className="table-div">{admin.email}</td>
           
            <td className="table-div">
            <div className="d-flex align-items-center" style={{color:"grey"}} onClick={()=>{removeAdmin(admin.email)}}>
              <Trash2 size={16} className="" style={{marginRight:"5px",color:"grey"}}/>
                Remove
            </div>
          </td>
      </tr>
        )
      })
    }
    const removeAdmin = async (adminEmail) => {
      const token = localStorage.getItem('token');
      const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
            const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
            const entity = 'user'
            const role = 'ADMIN'
            const endPoint = `${baseUrl}/${apiVersion}/${entity}/delete/admin`
            try {
                const response = await axios.post(endPoint, { adminEmail },{
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                })
                if (response.status === 200) {
                  setAdmins(prevAdmins => {
                    return prevAdmins.filter(admin => {
                      return admin.email != adminEmail
                    })
                  });
                }
            } catch (e) {
            }
    }

    return (
        <>
        <div className="Rightbar">
        <div className="rightbar_head">
            <div className="right_rightbar_head_child">
            <Users />
            <h3> Admin</h3>
            </div>
            <div>
           
           <button onClick={handleShow} className="admin-btn"> <img className="mr-1 plus-icon" src={Plus} />Add an admin</button>
            </div>
        </div>
        <Table responsive="sm">
    <thead>
      <tr>
      <th className="text-capitalize custom-wrapper">Id</th>
        <th className="text-capitalize custom-wrapper">Name</th>
        <th className="text-capitalize custom-wrapper">Email</th>
        <th className="text-capitalize custom-wrapper">Changes</th>
       
      </tr>
    </thead>
    <tbody>
      {renderAdmin()}
    </tbody>
  </Table>
    </div>
           <Modal centered show={show} onHide={handleClose}>
           <Modal.Header className="header-modal-wrapper"   >
             <Modal.Title className="text-center my-2 "><b>Add an admin</b></Modal.Title>
           </Modal.Header>
           <Modal.Body className="modal-container">
              <div className="field-wrapper">
               <label className="" style={{color:"#000",fontSize:"14px"}}>Enter Name</label>
               <input type="text" name= "fullname" placeholder="Admin Name" className="input-field" onChange={(e) => { setFullname(e.target.value) }}/>
               </div>
               <div className="field-wrapper">
               <label style={{color:"#000",fontSize:"14px"}}>Enter Username</label>
               <input type="text" name= "username" placeholder="User Name" className="input-field" onChange={(e) => { setUsername(e.target.value) }}/>
               </div>
               <div className="field-wrapper">
               <label style={{color:"#000",fontSize:"14px"}}>Enter Email</label>
               <input type="email" name= "email" placeholder="admin@invozone.com" className="input-field" onChange={(e) => { setEmail(e.target.value) }}/>
               </div>
               <div className="field-wrapper">
               <label style={{color:"#000",fontSize:"14px"}}>Enter Password</label>
               <input type="password"  name= "password" placeholder="password" className="input-field" onChange={(e) => { setPassword(e.target.value) }}/>
               </div>
               
           </Modal.Body>
           <Modal.Footer className="mb-3 button-wrapper">
             <Button variant="outline-secondary"onClick={()=>{handleClose()}}>Discard</Button>
             <Button variant="primary" onClick={()=>{registerAdmin(); handleClose()}}>Add Admin</Button>
           </Modal.Footer>
         </Modal>

         <Modal centered show={showRemove} onHide={handleCloseRemove}>
           <Modal.Header className="header-modal-wrapper"   >
             <Modal.Title className="text-center my-2 "><b>Remove an admin</b></Modal.Title>
           </Modal.Header>
           <Modal.Body className="modal-container">
               <div className="field-wrapper">
               <label style={{color:"#000",fontSize:"14px"}}>Enter Email</label>
               <input type="email" placeholder="admin@invozone.com" className="input-field" onChange={(e) => { setremoveEmail(e.target.value) }}/>
               </div>
           </Modal.Body>
           <Modal.Footer className="mb-3 button-wrapper">
             <Button variant="outline-secondary" onClick={()=>{handleCloseRemove()}}>Discard</Button>
             <Button variant="primary" onClick={()=>{removeAdmin(); handleCloseRemove()}}>Remove Admin</Button>
           </Modal.Footer>
         </Modal>
         </>
    )
}

export default Admin