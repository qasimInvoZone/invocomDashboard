
import React, { useState, useEffect, Fragment } from 'react'
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MessageCircle, User, Bell, Edit2,MessageSquare } from 'react-feather'
import {Tab, Nav} from 'react-bootstrap'
import ArrowBottom from '../../../assets/images/icons/customIcons/arrowbottom.svg'
import Button from 'reactstrap/lib/Button'
import axios from 'axios'
const Accounts = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [fullname, setFullname] = useState(user?.fullname)
    const [email, setEmail] = useState(user?.email)
    const [password, setPassword] = useState('')
    const updateUser = async () => {
        const baseUrl = process.env.REACT_APP_INVOCOM_API_URL
        const apiVersion = process.env.REACT_APP_INVOCOM_API_VERSION
        const entity = 'user'
        //const role = 'USER'
        const token = localStorage.getItem('token');
        const endPoint = `${baseUrl}/${apiVersion}/${entity}/update`
        try {
            const response = await axios.post(endPoint, { fullname, email, password },{
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            })
            if (response.status === 200) {
            }
        } catch (e) {
        }
    }
    return (
        
        <div className="Rightbar">
        <div className="rightbar_head">
            <div className="right_rightbar_head_child">
            <User />
            <h3> Accounts</h3>
            </div>

            <img src={ArrowBottom} />
        </div>

        <div className="d-flex">
            <div className="avatar-image-wrapper"></div>
         <div className="user_email_name">   
            <div className="name-input-wrapper">
                <div className="label-wrapper">Name</div>
                <div><input type="text" placeholder="Usama" value={fullname} className="input-field" onChange={(e) => { setFullname(e.target.value) }}/></div>
            </div>
            <div className="email-input-wrapper">
                <div className="label-wrapper">Email</div>
                <div>
                    <input type="text" placeholder="email@invozone.com" value={email} className="input-field" onChange={(e) => { setEmail(e.target.value) }}/>
                </div>
            </div>
            <div className="name-input-wrapper">
                <div className="label-wrapper">Password</div>
                <div><input type="password" placeholder="********" className="input-field" onChange={(e) => { setPassword(e.target.value) }}/></div>
            </div>
            <button className="change-pass-btn" onClick={() => updateUser()}>Save</button>

            </div>
        </div>

          
    </div>
       
    )
}

export default Accounts
